from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('productos/', ProductoList, name='producto-list'),
    path('productDetail/<int:pk>', views.ProductDetail.as_view(), name='productDetail'),
    path('productCreate', views.ProductCreate.as_view(), name='productCreate'),
]