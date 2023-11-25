from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
	path('cliente/', views.RegCliente.as_view()),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
	path('productDetail/<int:pk>', views.ProductDetail.as_view(), name='productDetail'),
	path('productCreate', views.ProductCreate.as_view(), name='productCreate'),
	path('productos/', views.ProductoList, name='producto-list'),
    path('cartAdd/', views.CarritoAdd.as_view(), name='cart-add'),
    path('cartEdit/<int:pk>', views.CarritoEdit.as_view(), name='cart-edit'),
    path('cartCliente/<str:email>', views.CarritoList.as_view(), name='cart-cliente'),
    path('ofertaedit/<int:pk>', views.OfertaEdit.as_view(), name = 'oferta-edit'),
    path('ofertaaad/', views.OfertaAdd.as_view(), name = 'oferta-add'),
    path('prodofertaslist/', views.ProductOfertaList.as_view(), name = 'Producto-oferta-list'),
    path('prodofertagetdel/<int:pk>', views.ProductoOfertaGetDel.as_view(), name = 'Producto-oferta-get-delete'),
    path('prodofertaadd/', views.ProductoOfertaAdd.as_view(), name='Producto-oferta-add'),
]

urlpatterns = format_suffix_patterns(urlpatterns)

