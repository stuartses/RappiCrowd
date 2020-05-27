from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from personins import profiletw


def index(request):
    return render(request, 'personins/index.html')

def load(request):
    profile = request.POST['profile']
    get_insights = profiletw.get(profile)
    return render(request, 'personins/load.html',
                  {'profile_result': get_insights})
