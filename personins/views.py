from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from personins import profiletw
import json


def index(request):
    return render(request, 'personins/index.html')
    #return HttpResponse('hola')

def load(request):
    profile = request.POST.get('profile')
    user_name = request.POST.get('user_name')
    get_insights = profiletw.get(user_name, profile)
    """
    return render(request, 'personins/load.html',
                  {'profile_result': get_insights})
    """
    """
    result = {}
    result['user'] = user_name
    result['profile'] = profile
    result_json = json.dumps(result)
    """
    return HttpResponse(get_insights)
