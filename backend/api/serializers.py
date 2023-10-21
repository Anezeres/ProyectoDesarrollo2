from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.validators import MinLengthValidator

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

        password = serializers.CharField(
        validators=[MinLengthValidator(8, message='Password must be at least 8 characters.')])
    
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(**clean_data)
        return user_obj
    
    
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