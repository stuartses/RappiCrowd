from rest_framework import generics
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from .models import Countries
from .models import States
from .models import Cities
from .models import EducationLevels
from .models import Currencies
from .models import Docutypes
from .models import Workers
from .models import Investors
from .models import InvestorsPerWorkers
from .serializers import CountriesSerializer
from .serializers import StatesSerializer
from .serializers import CitiesSerializer
from .serializers import EducationLevelsSerializer
from .serializers import CurrenciesSerializer
from .serializers import DocutypesSerializer
from .serializers import WorkersSerializer
from .serializers import InvestorsSerializer
from .serializers import InvestorsPerWorkersSerializer
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response

class CountriesAPIView(generics.ListCreateAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializer

class StatesAPIView(generics.ListCreateAPIView):
    queryset = States.objects.all()
    serializer_class = StatesSerializer

class CitiesAPIView(generics.ListCreateAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializer

class EducationLevelsAPIView(generics.ListCreateAPIView):
    queryset = EducationLevels.objects.all()
    serializer_class = EducationLevelsSerializer

class CurrenciesAPIView(generics.ListCreateAPIView):
    queryset = Currencies.objects.all()
    serializer_class = CurrenciesSerializer

class DocutypesAPIView(generics.ListCreateAPIView):
    queryset = Docutypes.objects.all()
    serializer_class = DocutypesSerializer

class WorkersAPIView(generics.ListCreateAPIView):
    queryset = Workers.objects.all()
    serializer_class = WorkersSerializer

class WorkersUpdateView(GenericAPIView, UpdateModelMixin):
    """
    Update worker
    """

    def patch(self, request, *args, **kwargs):
        """
        Allow a partial update of any field
        """

        model = get_object_or_404(Workers, pk=kwargs['pk'])
        data = request.data
        serializer = WorkersSerializer(model, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

class WorkerByDocument(GenericAPIView, UpdateModelMixin):
    """
    Show Worker by primary key
    """
    def get(self, request, *args, **kwargs):
        """
        Return de worker by primary key
        """
        model = get_object_or_404(Workers, pk=kwargs['pk'])
        serializer = WorkersSerializer(model)

        return Response(serializer.data)

class InvestorsAPIView(generics.ListCreateAPIView):
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer

class InvestorsCreateAPIView(generics.CreateAPIView):
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer

class InvestorsPerWorkersAPIView(generics.ListCreateAPIView):
    queryset = InvestorsPerWorkers.objects.all()
    serializer_class = InvestorsPerWorkersSerializer

def index(request):
    return render(request, 'frontend/index.html')

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
