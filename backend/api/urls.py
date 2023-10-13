from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import *

urlpatterns = [
    path('cliente/', RegCliente.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)