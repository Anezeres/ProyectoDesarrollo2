from rest_framework import serializers
from api.models import *
from django.contrib.auth import get_user_model, authenticate
from django.core.validators import MinLengthValidator
from api.utils.Validadores import *


UserModel = get_user_model()

class ClienteSerializer(serializers.Serializer):
    email = serializers.EmailField()
    ced = serializers.CharField()
    tel = serializers.CharField()
    nombre = serializers.CharField()
    password = serializers.CharField()

    def create(self, validated_data):
        return UserModel.objects.create_user(**validated_data)

    def validate_email(self, value):
        if not validador_correo(value):
            raise serializers.ValidationError(
                "El correo no debe ser de mas de 70 caracteres."
            )

        ELEM = CustomUser.objects.filter(email=value).count()

        if ELEM > 0:
            raise serializers.ValidationError(
                "Ya hay una cuenta asociada esa dirección de correo."
            )

        return value

    def validate_nombre(self, value):
        if not validador_nombre(value):
            raise serializers.ValidationError(
                "El nombre debe ser de entre 4 y 50 letras."
            )

        return value

    def validate_tel(self, value):
        if validador_num(value):
            if len(value) < 7 or len(value) > 10:
                raise serializers.ValidationError(
                    "El tel. debe ser de entre 7 y 10 números."
                )

            return value

        else:
            raise serializers.ValidationError("El tel. debe contener solo números.")

    def validate_ced(self, value):
        if validador_num(value):
            if len(value) > 12:
                raise serializers.ValidationError(
                    "La ced. no debe tener mas de 12 caracteres."
                )
            return value
        else:
            raise serializers.ValidationError("La ced. debe contener solo números.")

    def validate_password(self, value):
        if not validador_contrasena(value):
            raise serializers.ValidationError(
                "La contraseña debe tener entre 5 y 40 caracteres."
            )

        return value
    
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    ##  
    def check_user(self, data):
        user = authenticate(email=data['email'], password=data['password'])
        if not user:
                raise serializers.ValidationError('User not found')
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["nombre", "email", "ced", "tel"]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = '__all__'
