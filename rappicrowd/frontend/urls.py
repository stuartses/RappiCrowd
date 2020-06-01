from django.urls import path
from . import views


urlpatterns = [
    path(r'front', views.index ),
    path(r'como_funciona_domiciliario', views.como_funciona_domiciliario ),
]
