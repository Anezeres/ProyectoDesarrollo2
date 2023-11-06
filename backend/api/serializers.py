from rest_framework import serializers
from .models import *


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
class ProductoImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto_img
        fields = '__all__'

class ProductoSerializer(serializers.ModelSerializer):   
    marca = MarcaSerializer()
    categoria = CategoriaSerializer()
    imagenes = ProductoImgSerializer(many = True, read_only = True)
    class Meta:
        model = Producto
        fields = ('id','nombre','precio','descripcion','marca','categoria','imagenes')