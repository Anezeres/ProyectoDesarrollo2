from django.urls import path
from . import views

urlpatterns = [
	path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
  path('productDetail/<int:pk>', views.ProductDetail.as_view(), name='productDetail'),
  path('productCreate', views.ProductCreate.as_view(), name='productCreate'),
  path('productos/', views.ProductoList.as_view(), name='producto-list')
]