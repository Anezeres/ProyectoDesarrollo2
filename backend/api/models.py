import cloudinary
from cloudinary.models import CloudinaryField
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin  


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        user = self.create_user(email,password, **extra_fields)
        user.is_superuser = True
        user.save()
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(primary_key=True)
    ced = models.TextField(max_length=12)
    tel = models.TextField(max_length=10)
    nombre = models.TextField(max_length=50)
    USERNAME_FIELD = 'email'
    objects = CustomUserManager()

    @property
    def is_staff(self):
        return self.is_superuser
    
    def __str__(self):
        return self.email


class Categoria(models.Model):
    nombre = models.TextField(max_length=20)

    def __str__(self):
        return self.nombre

class Marca(models.Model):
    nombre = models.TextField(max_length=20)

    def __str__(self):
        return self.nombre

class Talla(models.Model):
    talla = models.TextField(max_length=3)


class Color(models.Model):
    color = models.TextField(max_length=20)


class Producto(models.Model):
    nombre = models.TextField(max_length=100)
    precio = models.BigIntegerField()
    descripcion = models.TextField(max_length=200)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)


class Producto_img(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    img = cloudinary.models.CloudinaryField(
        folder="media/fveh_images/", overwrite=True, resource_type="", blank=False
    )


class Oferta(models.Model):
    porcentaje = models.PositiveSmallIntegerField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()


class Venta(models.Model):
    fecha = models.DateField()
    total = models.FloatField
    ciudad = models.TextField(max_length=20)
    dir = models.TextField(max_length=25)


class Factura(models.Model):
    cliente = models.ManyToManyField(CustomUser)
    venta = models.ManyToManyField(Venta)


class Factura_producto(models.Model):
    factura = models.ManyToManyField(Factura)
    producto = models.ManyToManyField(Producto)
    unids = models.PositiveIntegerField()
    precio = models.PositiveBigIntegerField()


class Inventario(models.Model):
    producto = models.ManyToManyField(Producto)
    talla = models.ManyToManyField(Talla)
    color = models.ManyToManyField(Color)
    unids = models.PositiveIntegerField()


class Producto_oferta(models.Model):
    producto = models.ManyToManyField(Producto)
    oferta = models.ManyToManyField(Oferta)


class Carrito(models.Model):
    cliente = models.OneToOneField(CustomUser, primary_key=True, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    unids = models.PositiveIntegerField()

    class Meta:
        unique_together = (("cliente", "producto"),)


# Create your models here.
