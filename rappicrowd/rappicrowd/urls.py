"""rappicrowd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rappicrowdContainer import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'countries', views.CountriesAPIView.as_view(), name='countries-list'),
    path(r'states', views.StatesAPIView.as_view(), name='states-list'),
    path(r'cities', views.CitiesAPIView.as_view(), name='cities-list'),
    path(r'educationLevels', views.EducationLevelsAPIView.as_view(), name='educationlevels-list'),
    path(r'currencies', views.CurrenciesAPIView.as_view(), name='currencies-list'),
    path(r'docutypes', views.DocutypesAPIView.as_view(), name='docutypes-list'),
    path(r'workers', views.WorkersAPIView.as_view(), name='workers-list'),
    path(r'investors', views.InvestorsAPIView.as_view(), name='investors-list'),
    path(r'investorsPerWorkers', views.InvestorsPerWorkersAPIView.as_view(), name='investorsperworkers-list'),
    path(r'test1', views.test1),
    path(r'test2', views.test2),    
    path('', include('frontend.urls')),
]
