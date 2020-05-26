from rest_framework import serializers
from .models import Countries

class CountriesSerializer(serializers.ModelSerializer):
    '''serializer Countries model'''
    class Meta:
        model = Countries
        fields = "__all__"
