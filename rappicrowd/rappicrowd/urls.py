
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import url
from rappicrowdContainer import views
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'countries', views.CountriesAPIView.as_view(), name='countries-list'),
    path(r'states', views.StatesAPIView.as_view(), name='states-list'),
    path(r'cities', views.CitiesAPIView.as_view(), name='cities-list'),
    path(r'educationLevels', views.EducationLevelsAPIView.as_view(), name='educationlevels-list'),
    path(r'currencies', views.CurrenciesAPIView.as_view(), name='currencies-list'),
    path(r'docutypes', views.DocutypesAPIView.as_view(), name='docutypes-list'),
    path(r'workers', views.WorkersAPIView.as_view(), name='workers-list'),
    path(r'investors', csrf_exempt(views.InvestorsAPIView.as_view()), name="investors-list"),
    path(r'investorsCreate', views.InvestorsCreateAPIView.as_view(), name='investorscreate-list'),
    path(r'investorsPerWorkers', views.InvestorsPerWorkersAPIView.as_view(), name='investorsperworkers-list'),
    re_path('', views.index),
    re_path(r'^$', views.index),
    re_path(r'^(?:.*)/?$', views.index),   
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
