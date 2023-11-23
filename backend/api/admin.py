from django.contrib import admin
from .models import *

admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Categoria)
admin.site.register(Producto_img)
admin.site.register(Carrito)
# Register your models here.

admin.site.register(CustomUser)