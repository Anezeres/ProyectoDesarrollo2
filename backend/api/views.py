from django.shortcuts import render
from rest_framework import generics
from .models import Producto
from .serializers import ProductoSerializer
import cloudinary

cloudinary.config(
    cloud_name="dm4yz0etx",
    api_key="765481554234217",
    api_secret="vPY-MF2Atx8qVv7Rwg6pywHWiuw",
    secure=True,
)

class ProductoList(generics.ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

    
# Create your views here.
