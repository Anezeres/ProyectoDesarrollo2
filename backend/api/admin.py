from django.contrib import admin
from .models import *


admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Categoria)
admin.site.register(Carrito)
admin.site.register(Factura_producto)
admin.site.register(Factura)
admin.site.register(Venta)
admin.site.register(Talla)
admin.site.register(Color)
# Register your models here.

admin.site.register(CustomUser)