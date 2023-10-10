from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Cliente


class RegisterTestCase(TestCase):
    def setUp(self):
        Cliente.objects.create(
            email="ola@yopmail.com",
            ced="12382435",
            tel="12345678",
            nombre="Usuario Uno",
            contrasena="123456789",
        )

        user = User.objects.create_user("regCliente", "reg@correo.com", "12382435")
        user.permissions = ["api.add_Cliente"]
        user.save()

    def test_not_auth(self):
        c = APIClient()
        response = c.post(
            "/api/cliente/",
            {
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "123456",
                "nombre": "Usuario Uno",
                "contrasena": "123456789",
            },
        )
        self.assertEquals(
            response.json(),
            {"detail": "Las credenciales de autenticación no se proveyeron."},
        )

    def test_auth_reg(self):
        c =APIClient()

        token = c.post(
            "/api-token-auth/",
            {
                "username": "regCliente",
                "password": "12382435"
            }
        ).json()["token"]
        
        c.credentials(HTTP_AUTHORIZATION='Token ' + token)

        res = c.post(
            path="/api/cliente/",
            data={
                "email": "ola1@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "contrasena": "1234567",
            },
        )

        self.assertEquals(
            res.status_code,201,
        )

    def test_auth_rep(self):
        c = APIClient()

        token = c.post(
            "/api-token-auth/",
            {
                "username": "regCliente",
                "password": "12382435"
            }
        ).json()["token"]
        
        c.credentials(HTTP_AUTHORIZATION='Token ' + token)

        res = c.post(
            path="/api/cliente/",
            data={
                "email": "ola@yopmail.com",
                "ced": "12382435",
                "tel": "1234567",
                "nombre": "Usuario Uno",
                "contrasena": "1234567",
            },
        )

        self.assertEquals(
            res.json(),
            {"email": ["Ya hay una cuenta asociada esa dirección de correo."]},
        )

    def test_auth_err(self):
        c =APIClient()

        token = c.post(
            "/api-token-auth/",
            {
                "username": "regCliente",
                "password": "12382435"
            }
        ).json()["token"]
        
        c.credentials(HTTP_AUTHORIZATION='Token ' + token)

        res = c.post(
            path="/api/cliente/",
            data={
                "email": "ola1yopmail.com",
                "ced": "hola",
                "tel": "1234567891a",
                "nombre": "__cod___",
                "contrasena": "1234567*",
            },
        )

        self.assertEquals(
            res.json(),{
                "email": ["Introduzca una dirección de correo electrónico válida."],
                "ced": ["La ced. debe contener solo números."],
                "tel": ["El tel. debe contener solo números."],
                "nombre": ["El nombre debe ser de entre 4 y 50 letras."],
                "contrasena": ["La contraseña debe tener entre 5 y 40 caracteres."]
            }
        )


# Create your tests here.
