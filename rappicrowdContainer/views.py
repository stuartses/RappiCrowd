from rest_framework import generics
from .models import Countries
from .serializers import CountriesSerializer
from django.http import HttpResponse
from django.shortcuts import render


class CountriesAPIView(generics.ListCreateAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializer

def test1(request):
    return HttpResponse('Prueba1')

def test2(request):
    form = Countries()
    countriesObj = Countries.objects.all()
    countries = {
        'form': form,
        'countries': countriesObj
    }
    return render(request, 'test2.html', countries)
