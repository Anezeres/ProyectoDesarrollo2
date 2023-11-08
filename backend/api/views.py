from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import *
import cloudinary
from .serializers import ProductSerializer
from rest_framework import generics
from api.models import Producto
from rest_framework.permissions import IsAdminUser

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




   
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductSerializer
	permission_classes = [IsAdminUser]

  
class ProductCreate(generics.CreateAPIView):
	queryset = Producto.objects.all()
	serializer_class = ProductSerializer
	permission_classes = [IsAdminUser]