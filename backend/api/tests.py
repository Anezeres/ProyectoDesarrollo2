from django.test import TestCase
from rest_framework.test import RequestsClient
from api.models import *


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
        c = RequestsClient()

        res = c.post(
            url="http://testserver/api/cliente/",
            json={
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
        c = RequestsClient()

        res = c.post(
            url="http://testserver/api/cliente/",
            json={
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
        c = RequestsClient()

        res = c.post(
            url="http://testserver/api/cliente/",
            json={
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
        CustomUser.objects.create(
            email="ola@yopmail.com",
            ced="12382435",
            tel="12345678",
            nombre="Usuario Uno",
            password="123456789",
        )
        Categoria.objects.create(nombre="Pantalon")
        Marca.objects.create(nombre="Marca generica")
        Producto.objects.create(
            nombre="Pantalon generico",
            precio=10000,
            descripcion="Pantalon muy comodo en varios colores.",
            marca=1,
            categoria=1,
        )

    def test_no_auth(self):
        c = RequestsClient()

        res = c.post(
            url="http://testserver/api/carrito/",
            data={"email": "ola@yopmail.com", "producto": 1, "unids": 2},
        )

        self.assertEquals(
            res.json(),
            {"detail": "Las credenciales de autenticación no se proveyeron."},
        )

    def test_no_csrf(self):
        c = RequestsClient()

        c.post(
            url="http://testserver/api/login",
            json={"email": "ola@yopmail.com", "password": "123456789"},
        )
        res = c.post(
            url="http://testserver/api/carrito/",
            data={"email": "ola@yopmail.com", "producto": 1, "unids": 2},
        )

        self.assertEquals(res.json(), {"detail": "CSRF Failed: CSRF token missing."})

    def test_add(self):
        c = RequestsClient()

        token = c.post(
            url="http://testserver/api/login",
            json={"email": "ola@yopmail.com", "password": "123456789"},
        ).json()["token"]

        res = c.post(
            url="http://testserver/api/cartAdd/",
            json={"email": "ola@yopmail.com", "producto": 1, "unids": 1},
            headers={"X-CSRFToken": token},
        )

        self.assertEquals(res.status_code, 200)

    def test_get_cart(self):
        c = RequestsClient()

        res = c.get(url="http://testserver/api/cartCliente/ola@yopmail.com")

        self.assertEquals(res.json(), {"data": [], "count": 0})

        token = c.post(
            url="http://testserver/api/login",
            json={"email": "ola@yopmail.com", "password": "123456789"},
        ).json()["token"]

        res = c.post(
            url="http://testserver/api/cartAdd/",
            json={"email": "ola@yopmail.com", "producto": 1, "unids": 1},
            headers={"X-CSRFToken": token},
        )

        res = c.get(url="http://testserver/api/cartCliente/ola@yopmail.com")

        self.assertEquals(
            res.json(),
            {
                "data": [
                    {
                        "id": 1,
                        "producto_id": 1,
                        "unids": 1,
                    }
                ],
                "count": 1,
            },
        )

    def test_edit_cart(self):
        c = RequestsClient()

        token = c.post(
            url="http://testserver/api/login",
            json={"email": "ola@yopmail.com", "password": "123456789"},
        ).json()["token"]

        c.post(
            url="http://testserver/api/cartAdd/",
            json={"email": "ola@yopmail.com", "producto": 1, "unids": 1},
            headers={"X-CSRFToken": token},
        )

        res = c.put(
            url="http://testserver/api/cartEdit/1",
            json={"email": "ola@yopmail.com", "producto": 1, "unids": 2},
            headers={"X-CSRFToken": token},
        )

        self.assertEquals(
            res.json(), {"id": 1, "email": "ola@yopmail.com", "producto": 1, "unids": 2}
        )

    def test_del_cart(self):
        c = RequestsClient()

        token = c.post(
            url="http://testserver/api/login",
            json={"email": "ola@yopmail.com", "password": "123456789"},
        ).json()["token"]

        c.post(
            url="http://testserver/api/cartAdd/",
            json={"email": "ola@yopmail.com", "producto": 1, "unids": 1},
            headers={"X-CSRFToken": token},
        )

        res = c.delete(
            url="http://testserver/api/cartEdit/1",
            headers={"X-CSRFToken": token},
        )

        self.assertEquals(res.status_code, 200)


# Create your tests here.
