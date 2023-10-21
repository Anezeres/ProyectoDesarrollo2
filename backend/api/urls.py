from django.urls import path
from . import views

urlpatterns = [
    path('productDetail/<int:pk>', views.ProductDetail.as_view(), name='productDetail'),
    path('productCreate', views.ProductCreate.as_view(), name='productCreate')
]