from django.urls import path
from .views import ProductoList

urlpatterns = [
    path('productos/', ProductoList.as_view(), name='producto-list'),
]