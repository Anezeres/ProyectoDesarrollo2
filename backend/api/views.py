from .serializers import ProductSerializer
from rest_framework import generics
from api.models import Producto
from rest_framework.permissions import IsAdminUser


class ProductoList(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductSerializer

   
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductSerializer
	permission_classes = [IsAdminUser]

  
class ProductCreate(generics.CreateAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductSerializer
	permission_classes = [IsAdminUser]