from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Solicitante
from .serializers import *

@api_view(['GET', 'POST'])
def solicitantes_list(request):
    if request.method == 'GET':
        data = Solicitante.objects.all() # Accede a toda la BD para devolver todos los solicitantes

        serializer = SolicitanteSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST': 
        serializer = SolicitanteSerializer(data=request.data)
        if serializer.is_valid(): # Valida que la data recibida esté conforme al modelo Solicitante
            serializer.save() # Crea solicitante
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def solicitantes_detail(request, pk):
    try:
        solicitante = Solicitante.objects.get(pk=pk) # Devuelve solicitante requerido
    except Solicitante.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SolicitanteSerializer(solicitante) # Get con solicitante requerido 
        return Response(serializer.data)

    if request.method == 'PUT': 
        serializer = SolicitanteSerializer(solicitante, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save() # Actualizar información de un solicitante
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        solicitante.delete() # Eliminar solicitante
        return Response(status=status.HTTP_204_NO_CONTENT)