from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')

def como_funciona_domiciliario(request):
    return render(request, 'frontend/como_funciona_domiciliario.html')    
