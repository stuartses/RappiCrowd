from django.contrib import admin
from django.urls import path, re_path
from rappicrowd import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    # Handle both creations (POST) and listing (GET) of solicitantes
    re_path(r'^api/solicitantes/$', views.solicitantes_list),

    # Remove (DELETE) or update (PUT) the data of a single solicitante
    re_path(r'^api/solicitantes/(?P<pk>[0-9]+)$', views.solicitantes_detail),
]
