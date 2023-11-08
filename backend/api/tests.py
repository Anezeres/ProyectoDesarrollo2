from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import *  

class ProductoListTestCase(TestCase):
    def setUp(self):
        
        self.client = APIClient()
        self.marca = Marca.objects.create(
            nombre = "miMarca"
        )
        self.categoria = Categoria.objects.create(
            nombre = "miCategoria"
        )
        self.producto = Producto.objects.create(
            nombre="Producto de prueba",
            precio=100,
            descripcion = "chevere",
            marca = self.marca,
            categoria = self.categoria
        )

        self.producto_img1 = Producto_img.objects.create(
            producto = self.producto,
            img = 'OLA'
        )

        self.producto_img2 = Producto_img.objects.create(
            producto = self.producto,
            img = 'HOLA'
        )

    def test_producto_list(self):
        
        response = self.client.get('/api/productos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = response.json()

        self.assertEqual(len(data), 1) 
        producto = data[0]
        self.assertEqual(producto["nombre"], self.producto.nombre)
        self.assertEqual(producto["precio"], self.producto.precio)
        self.assertEqual(producto["categoria"], self.producto.categoria.nombre)
        self.assertEqual(producto["marca"], self.producto.marca.nombre)
        self.assertEqual(len(producto["imagenes"]),2)
    
