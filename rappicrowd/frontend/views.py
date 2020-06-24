''' This is the view to show the components of the frontend '''
from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
