from django.contrib.auth import login, logout
from django.db.models import F, Sum
from rest_framework import generics, permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from functools import reduce

from api.models import *

from .serializers import *


# Create your views here.
class RegCliente(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = ClienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    ##
    def post(self, request):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid():
            user = serializer.check_user(data)
            login(request, user)
            return Response({"message": "you're logged in"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response({}, status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    ##
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({"user": serializer.data}, status=status.HTTP_200_OK)


class ProductoList(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]


class ProductCreate(generics.CreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]


class CarritoEdit(generics.RetrieveUpdateDestroyAPIView):
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer
    permission_classes = [IsAuthenticated]


class CarritoAdd(generics.CreateAPIView):
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer
    permission_classes = [IsAuthenticated]


class CarritoList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, email):
        query = list(
            Carrito.objects.filter(cliente=email)
            .annotate(name=F("producto_id__nombre"))
            .annotate(description=F("producto_id__descripcion"))
            .annotate(quantity=F("unids"))
            .values("quantity", "id", "producto_id", "description", "name")
        )

        for i in query:
            ID = i["producto_id"]
            img = list(Producto_img.objects.filter(producto=ID))

            if len(img) == 0:
                img = None
            else:
                img = img[0].img.url

            i["image"] = img

        return Response({"data": query, "count": len(query)}, status=status.HTTP_200_OK)


class MostSoldItems(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        CANT = list(
            Producto.objects.all()
            .annotate(marc=F("marca__nombre"))
            .annotate(cat=F("categoria__nombre"))
            .values("id", "nombre", "cat", "marc")
        )

        query = list(
            map(
                (
                    lambda x: {
                        "id": x["id"],
                        "nombre": x["nombre"],
                        "categoria": x["cat"],
                        "marca": x["marc"],
                        "ventas": sum(
                            map(
                                (lambda x: x["unids"]),
                                Factura_producto.objects.filter(
                                    producto__id=x["id"]
                                ).values("unids"),
                            ),
                        ),
                    }
                ),
                CANT,
            )
        )
        query.sort(key=(lambda x: x["ventas"]), reverse=True)

        return Response({"data": query, "count": len(query)}, status=status.HTTP_200_OK)
