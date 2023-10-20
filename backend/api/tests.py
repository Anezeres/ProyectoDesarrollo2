from django.test import TestCase
from rest_framework.test import APIClient

class ProductosAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_list_productos(self):
        response = self.client.get('/api/productos/')
        self.assertEqual(response.status_code, 200) 