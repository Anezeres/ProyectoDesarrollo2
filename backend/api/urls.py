from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from .views import *


urlpatterns = [
	path('cliente/', views.RegCliente.as_view()),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
    path('productos/', ProductoList, name='producto-list'),
	path('user', views.UserView.as_view(), name='user'),
	path('productDetail/<int:pk>', views.ProductDetail.as_view(), name='productDetail'),
	path('productCreate', views.ProductCreate.as_view(), name='productCreate'),	
    path('cartAdd/', views.CarritoAdd.as_view(), name='cart-add'),
    path('cartEdit/<int:pk>', views.CarritoEdit.as_view(), name='cart-edit'),
    path('cartCliente/<str:email>', views.CarritoList.as_view(), name='cart-cliente'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
