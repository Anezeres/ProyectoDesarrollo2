from django.urls import path
from .views import ProductoList

urlpatterns = [
    path('productos/', ProductoList, name='producto-list'),
]