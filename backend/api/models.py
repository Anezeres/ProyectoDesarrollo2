from django.db import models
import cloudinary
from cloudinary.models import CloudinaryField


class Cliente(models.Model):
    email = models.EmailField(primary_key=True)
    ced = models.TextField(max_length=12, unique=True)
    tel = models.TextField(max_length=10)
    nombre = models.TextField(max_length=50)
    contrasena = models.TextField(max_length=40)


class Administrador(models.Model):
    email = models.EmailField(primary_key=True)
    nombre = models.TextField(max_length=50)
    ced = models.TextField(max_length=12, unique=True)
    contrasena = models.TextField(max_length=40)


class Categoria(models.Model):
    nombre = models.TextField(max_length=20)


class Marca(models.Model):
    nombre = models.TextField(max_length=20)


class Talla(models.Model):
    talla = models.TextField(max_length=3)


class Color(models.Model):
    color = models.TextField(max_length=20)


class Producto(models.Model):
    nombre = models.TextField(max_length=100)
    precio = models.BigIntegerField()
    descripcion = models.TextField(max_length=200)
    marca = models.ForeignKey(Marca)
    categoria = models.ForeignKey(Categoria)


class Producto_img(models.Model):
    producto = models.ForeignKey(Producto)
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
    cliente = models.ManyToManyField(Cliente)
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
    cliente = models.ManyToManyField(Cliente, primary_key=True)
    producto = models.ManyToManyField(Producto)
    unids = models.PositiveIntegerField()

    class Meta:
        unique_together = (("cliente", "producto"),)


# Create your models here.
