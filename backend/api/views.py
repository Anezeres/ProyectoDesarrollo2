from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth import login, logout
from rest_framework.decorators import api_view
from .models import *
from django.db.models import F
import cloudinary
from .serializers import *
from rest_framework import generics, permissions, status
from api.models import *
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
   



cloudinary.config(
    cloud_name="dm4yz0etx",
    api_key="765481554234217",
    api_secret="vPY-MF2Atx8qVv7Rwg6pywHWiuw",
    secure=True,
)

@api_view(["GET"])
def ProductoList(request):
    try:
        aux = []
        prod = list(Producto.objects.all())
        imgs = list(Producto_img.objects.all())
        
        for i in prod:
            temporal_img = []
            for imagen in imgs:
                if imagen.producto.id == i.id:
                    temporal_img.append(imagen.img.url)
            aux.append(
                {
                    "id": i.id,
                    "nombre": i.nombre,
                    "precio": i.precio,
                    "marca": i.marca.nombre,
                    "descripcion": i.descripcion,
                    "categoria": i.categoria.nombre,
                    "imagenes": temporal_img
                }
            )
            

        return JsonResponse(aux,safe=False)
    except TimeoutError:
        return JsonResponse({"code": 3})





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
            return Response({"message":"you're logged in"}, status=status.HTTP_200_OK)
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
                img= img[0].img.url

            i["image"] = img

        return Response({"data": query, "count": len(query)}, status=status.HTTP_200_OK)
