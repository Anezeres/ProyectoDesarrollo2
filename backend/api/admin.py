from django.contrib import admin
from .models import *

admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Categoria)
admin.site.register(Carrito)
admin.site.register(Producto_img)
# Register your models here.

admin.site.register(CustomUser)