''' This is the url used for the load of components/App.js '''
from django.urls import path

from . import views

urlpatterns = [
  path('', views.index)
]
