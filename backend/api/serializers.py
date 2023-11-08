from rest_framework import serializers
from api.models import Producto

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
