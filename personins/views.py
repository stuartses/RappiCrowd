from django.shortcuts import render
from django.http import HttpResponse
from personins import getpersonins
import json


def index(request):
    return render(request, 'personins/index.html')

def load(request):
    profile = request.POST.get('profile')
    user_name = request.POST.get('user_name')
    mode = request.POST.get('mode')
    get_insights = getpersonins.get(user_name, profile, mode)

    return HttpResponse(get_insights, content_type='application/json')
