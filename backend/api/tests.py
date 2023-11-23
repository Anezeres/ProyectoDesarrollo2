from django.test import TestCase
from rest_framework.test import APIClient
from api.models import *
from django.urls import reverse
from rest_framework import status


class RegisterTestCase(TestCase):
    def setUp(self):
        CustomUser.objects.create(
            email="ola@yopmail.com",
            ced="12382435",
            tel="12345678",
            nombre="Usuario Uno",
            password="123456789",
        )

    def test_auth_reg(self):
        c = APIClient()

        res = c.post(
            "/api/cliente/",
            {
                "email": "ola1@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "1234567",
            },
        )

        self.assertEquals(
            res.status_code,
            201,
        )

    def test_auth_rep(self):
        c = APIClient()

        res = c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "1234567",
            },
        )

        self.assertEquals(
            res.json(),
            {"email": ["Ya hay una cuenta asociada esa dirección de correo."]},
        )

    def test_auth_err(self):
        c = APIClient()

        res = c.post(
            "/api/cliente/",
            {
                "email": "ola1yopmail.com",
                "ced": "hola",
                "tel": "1234567891a",
                "nombre": "__cod___",
                "password": "1234567*",
            },
        )

        self.assertEquals(
            res.json(),
            {
                "email": ["Introduzca una dirección de correo electrónico válida."],
                "ced": ["La ced. debe contener solo números."],
                "tel": ["El tel. debe contener solo números."],
                "nombre": ["El nombre debe ser de entre 4 y 50 letras."],
                "password": ["La contraseña debe tener entre 5 y 40 caracteres."],
            },
        )


class CarritoTestCase(TestCase):
    def setUp(self):
        Producto.objects.create(
            nombre="Pantalon generico",
            precio=10000,
            descripcion="Pantalon muy comodo en varios colores.",
            marca=Marca.objects.create(nombre="Marca generica"),
            categoria=Categoria.objects.create(nombre="Pantalon"),
        )

    def test_no_auth(self):
        c = APIClient()

        res = c.post(
            "/api/cartAdd/",
            {"email": "ola@yopmail.com", "producto": 5, "unids": 2},
        )

        self.assertEquals(res.status_code, 403)

    def test_add(self):
        c = APIClient()

        c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "123456789",
            },
        )

        c.login(email="ola@yopmail.com", password="123456789")

        res = c.post(
            "/api/cartAdd/", {"cliente": "ola@yopmail.com", "producto": 1, "unids": 1}
        )

        self.assertEquals(res.status_code, 201)

    def test_get_cart(self):
        c = APIClient()

        c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "123456789",
            },
        )

        c.login(email="ola@yopmail.com", password="123456789")

        res = c.post(
            "/api/cartAdd/",
            {"cliente": "ola@yopmail.com", "producto": 4, "unids": 1},
        )

        res = c.get("/api/cartCliente/ola@yopmail.com")

        self.assertEquals(
            res.json(),
            {
                "data": [
                    {
                        "id": 4,
                        "producto_id": 4,
                        "quantity": 1,
                        "image": None,
                        "name": "Pantalon generico",
                        "description": "Pantalon muy comodo en varios colores."
                    }
                ],
                "count": 1,
            },
        )

    def test_edit_cart(self):
        c = APIClient()

        c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "123456789",
            },
        )
        c.login(email="ola@yopmail.com", password="123456789")

        res = c.post(
            "/api/cartAdd/", {"cliente": "ola@yopmail.com", "producto": 3, "unids": 1}
        )

        res = c.put(
            "/api/cartEdit/3", {"cliente": "ola@yopmail.com", "producto": 3, "unids": 2}
        )

        self.assertEquals(
            res.json(),
            {"id": 3, "cliente": "ola@yopmail.com", "producto": 3, "unids": 2},
        )

    def test_del_cart(self):
        c = APIClient()

        c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "password": "123456789",
            },
        )

        c.login(email="ola@yopmail.com", password="123456789")

        res = c.post(
            "/api/cartAdd/",
            {"cliente": "ola@yopmail.com", "producto": 2, "unids": 1},
        )

        self.assertEquals(res.status_code, 201)

        res = c.delete(
            "/api/cartEdit/2",
        )

        self.assertEquals(res.status_code, 204)

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
