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
from django.urls import path, re_path, include # libraries for redirecting and include urls from others folders or apps
from django.conf.urls import url 
from rappicrowdContainer import views
from django.views.decorators.csrf import csrf_exempt # library to protect the view for attack cross site request forgery
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls), # url to administrative way django
    path('personins/', include('personins.urls')),  # url IBM Insights
    path(r'countries', views.CountriesAPIView.as_view(), name='countries-list'), # url rest api countries model
    path(r'states', views.StatesAPIView.as_view(), name='states-list'), # url rest api states model
    path(r'cities', views.CitiesAPIView.as_view(), name='cities-list'), # url rest api cities model
    path(r'educationLevels', views.EducationLevelsAPIView.as_view(), # url rest api educationLevels model
         name='educationlevels-list'),
    path(r'currencies', views.CurrenciesAPIView.as_view(), # url rest api currencies model
         name='currencies-list'),
    path(r'docutypes', views.DocutypesAPIView.as_view(), name='docutypes-list'), # url rest api docutypes model
    path(r'workers', views.WorkersAPIView.as_view(), name='workers-list'), # url rest api workers model
    path(r'investors', csrf_exempt(views.InvestorsAPIView.as_view()), # url rest api investors model
         name="investors-list"),
    path(r'investorsCreate', views.InvestorsCreateAPIView.as_view(), # url view creation investor
         name='investorscreate-list'),
    path(r'investorsPerWorkers', views.InvestorsPerWorkersAPIView.as_view(), # url rest api investors per workers model 
         name='investorsperworkers-list'),
    path(r'investorsPerWorkersTotalAmountPerWorker', views.InvestorsPerWorkersTotalAmountPerWorkerAPIView.as_view(), name='investorsperworkerstotalamountperworker-list'), # url rest api where only shows worker id and amount to calculate in the view with javascript the total amount per worker

    # update worker
    url(r'^workers/update/(?P<pk>[A-Za-z0-9]+)/$',
        views.WorkersUpdateView.as_view(), name='workers-update'), 
    # worker by primary key
    url(r'^workers/(?P<pk>[A-Za-z0-9]+)$',
        views.WorkerByDocument.as_view(), name='worker-by-document'),

    path('', include('frontend.urls')), # line to include the frontend urls from urls.py file for the frontend folder
    re_path('', views.index), 
    re_path(r'^$', views.index),
    re_path(r'^(?:.*)/?$', views.index),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # include the media files from media folder in the view
