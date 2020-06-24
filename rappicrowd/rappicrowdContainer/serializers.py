''' serializers for all the views of the project. This enables the format json according the configuration of each one '''

from rest_framework import serializers
from .models import Countries
from .models import States
from .models import Cities
from .models import EducationLevels
from .models import Currencies
from .models import Docutypes
from .models import Workers
from .models import Investors
from .models import InvestorsPerWorkers


''' every serializer takes the data of the model and create a format json '''

class CountriesSerializer(serializers.ModelSerializer):
    '''serializer Countries model'''
    class Meta:
        model = Countries
        fields = "__all__"

class StatesSerializer(serializers.ModelSerializer):
    '''serializer States model'''
    class Meta:
        model = States
        fields = "__all__"

class CitiesSerializer(serializers.ModelSerializer):
    '''serializer Cities model'''
    class Meta:
        model = Cities
        fields = "__all__"

class EducationLevelsSerializer(serializers.ModelSerializer):
    '''serializer EducationLevels model'''
    class Meta:
        model = EducationLevels
        fields = "__all__"

class CurrenciesSerializer(serializers.ModelSerializer):
    '''serializer Moneys model'''
    class Meta:
        model = Currencies
        fields = "__all__"

class DocutypesSerializer(serializers.ModelSerializer):
    '''serializer Docutypes model'''
    class Meta:
        model = Docutypes
        fields = "__all__"

class WorkersSerializer(serializers.ModelSerializer):
    '''serializer Workers model'''
    class Meta:
        model = Workers
        fields = "__all__"

class InvestorsSerializer(serializers.ModelSerializer):
    '''serializer Investors model'''
    class Meta:
        model = Investors
        fields = "__all__"

class InvestorsPerWorkersSerializer(serializers.ModelSerializer):
    '''serializer InvestorsPerWorkers model'''
    class Meta:
        model = InvestorsPerWorkers
        fields = "__all__"

class InvestorsPerWorkersTotalAmountPerWorkerSerializer(serializers.ModelSerializer):
    '''serializer InvestorsPerWorkers model. In this case, this serializer only takes the id and the amount of the model'''

    class Meta:
        model = InvestorsPerWorkers
        fields = ['investorPerWorkerWorkerCed', 'investorPerWorkerAmount']
