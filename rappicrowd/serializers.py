from rest_framework import serializers
from .models import Solicitante

class SolicitanteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Solicitante
        fields = ('pk', 'firstName', 'lastName', 'birthDate', 'city', 'cedula', 'email', 'celular',
                'monthlyExpenses', 'availableDays', 'availableHours', 'solicitanteUser',
                'solicitantePassword', 'question1', 'question2', 'question3', 'question4',
                'question5', 'question6', 'question7', 'question8', 'question9', 'question10',
                'question11', 'question12', 'question13', 'question14', 'question15', 'question16',
                'question17', 'question18', 'question19', 'question20', 'twitter', 'registrationDate')
        