from django.test import TestCase
from rest_framework.test import APIClient
from api.models import *
from datetime import date


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

        CustomUser.objects.create_user(email="ola@yopmail.com", password="123456789")

    def test_no_auth(self):
        c = APIClient()

        res = c.post(
            "/api/cartAdd/",
            {"email": "ola@yopmail.com", "producto": 5, "unids": 2},
        )

        self.assertEquals(res.status_code, 403)

    def test_add(self):
        c = APIClient()

        c.login(email="ola@yopmail.com", password="123456789")

        res = c.post(
            "/api/cartAdd/", {"cliente": "ola@yopmail.com", "producto": 1, "unids": 1}
        )

        self.assertEquals(res.status_code, 201)

    def test_get_cart(self):
        c = APIClient()

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
                        "description": "Pantalon muy comodo en varios colores.",
                    }
                ],
                "count": 1,
            },
        )

    def test_edit_cart(self):
        c = APIClient()

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


class MostSoldItemsTestCase(TestCase):
    def setUp(self):
        self.marca1 = Marca.objects.create(nombre="Marca 1")
        self.marca2 = Marca.objects.create(nombre="Marca 2")

        self.cat1 = Categoria.objects.create(nombre="Pantalones")
        self.cat2 = Categoria.objects.create(nombre="Camisas")
        self.cat3 = Categoria.objects.create(nombre="Chaquetas")

        self.color = Color.objects.create(color="Azul")

        self.talla = Talla.objects.create(talla="S")

        Producto.objects.create(
            nombre="Pantalon generico",
            precio=10000,
            descripcion="Pantalon muy comodo en varios colores.",
            marca=self.marca1,
            categoria=self.cat1,
        )
        Producto.objects.create(
            nombre="Camisa generica",
            precio=100,
            descripcion="Camisa muy fresca.",
            marca=self.marca2,
            categoria=self.cat2,
        )
        Producto.objects.create(
            nombre="Saco generico",
            precio=100000,
            descripcion="Saco muy elegante.",
            marca=self.marca1,
            categoria=self.cat3,
        )

        CustomUser.objects.create_superuser(
            email="admin@correo.com", password="1234567"
        )

        CustomUser.objects.create_user(email="ola@yopmail.com", password="123456789")

        Venta.objects.create(fecha=str(date.today()), ciudad="Cali", dir="Calle 34"),

        factura = Factura.objects.create()
        factura.cliente.set(CustomUser.objects.all())
        factura.venta.set(Venta.objects.all())
        factura.save()

        fact_prod = Factura_producto.objects.create(unids=15, precio=10)
        fact_prod.factura.set(Factura.objects.all())
        fact_prod.color.set(Color.objects.all())
        fact_prod.talla.set(Talla.objects.all())
        fact_prod.producto.set(Producto.objects.filter(nombre="Camisa generica"))
        fact_prod.save()

    def test_no_auth(self):
        c = APIClient()

        res = c.get(path="/api/sales")

        self.assertEquals(res.status_code, 403)

    def test_auth(self):
        c = APIClient()

        c.login(email="admin@correo.com", password="1234567")

        res = c.get(path="/api/sales")

        self.assertEquals(res.status_code, 200)

    def test_count_equal_len_prod(self):
        c = APIClient()

        c.login(email="admin@correo.com", password="1234567")

        res = c.get("/api/sales")

        self.assertEquals(res.json()["count"], 3)
