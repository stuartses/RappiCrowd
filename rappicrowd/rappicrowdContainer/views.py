''' These are the views of the project. This creates the rest api and the templates views '''

from rest_framework import generics
from rest_framework.generics import GenericAPIView # create automatic and generic api views 
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
from .serializers import InvestorsPerWorkersTotalAmountPerWorkerSerializer
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response


class CountriesAPIView(generics.ListCreateAPIView): 
    ''' generic api view countries model '''
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializer

class StatesAPIView(generics.ListCreateAPIView):
    ''' generic api view states model '''
    queryset = States.objects.all()
    serializer_class = StatesSerializer

class CitiesAPIView(generics.ListCreateAPIView):
    ''' generic api view cities model '''
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializer

class EducationLevelsAPIView(generics.ListCreateAPIView):
    ''' generic api view educationLevels model '''
    queryset = EducationLevels.objects.all()
    serializer_class = EducationLevelsSerializer

class CurrenciesAPIView(generics.ListCreateAPIView):
    ''' generic api view cureencies model '''
    queryset = Currencies.objects.all()
    serializer_class = CurrenciesSerializer

class DocutypesAPIView(generics.ListCreateAPIView):
    ''' generic api view docutypes model '''
    queryset = Docutypes.objects.all()
    serializer_class = DocutypesSerializer

class WorkersAPIView(generics.ListCreateAPIView):
    ''' generic api view workers model '''
    queryset = Workers.objects.all()
    serializer_class = WorkersSerializer

class WorkersUpdateView(GenericAPIView, UpdateModelMixin):
    """
    Update worker. This is a template view. It is not generic api view
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
    ''' generic api view investors model '''
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer

class InvestorsCreateAPIView(generics.CreateAPIView):
    ''' generic api view investors model. Only for creations '''
    queryset = Investors.objects.all()
    serializer_class = InvestorsSerializer

class InvestorsPerWorkersAPIView(generics.ListCreateAPIView):
    ''' generic api view investorsPerWorkers model '''
    queryset = InvestorsPerWorkers.objects.all()
    serializer_class = InvestorsPerWorkersSerializer

class InvestorsPerWorkersTotalAmountPerWorkerAPIView(generics.ListAPIView):
    ''' generic api view investorsPerWorkers model with the worker id and amount '''
    queryset = InvestorsPerWorkers.objects.all()
    serializer_class = InvestorsPerWorkersTotalAmountPerWorkerSerializer

def index(request):
    ''' view for the static content from frontend folder app '''
    return render(request, 'frontend/index.html')
