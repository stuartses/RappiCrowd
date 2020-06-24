"""
Urls for Personins Web Api. This is needed for Django Framework
"""
from django.urls import path

from . import views

app_name = 'personins'
urlpatterns = [
    path('', views.index, name='index'),
    path('load/', views.load, name='load'),
]
