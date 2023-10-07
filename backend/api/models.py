import cloudinary
from cloudinary.models import CloudinaryField
from django.db import models


class Cliente(models.Model):
    email = models.EmailField(primary_key=True)
    ced = models.TextField(max_length=12)
    tel = models.TextField(max_length=10)
    nombre = models.TextField(max_length=50)
    contrasena = models.TextField(max_length=40)

    def __str__(self):
        return self.nombre
    


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
    cliente = models.OneToOneField(Cliente, primary_key=True, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    unids = models.PositiveIntegerField()

    class Meta:
        unique_together = (("cliente", "producto"),)


# Create your models here.
