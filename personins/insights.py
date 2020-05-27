"""
Module: insights
Gets the behavior a person using the IBM Personaly Insights
based in twitter profile
More information: https://cloud.ibm.com/docs/personality-insights
"""

from requests.auth import HTTPBasicAuth
import requests
import json


def send(data_json=''):
    """
    Make a http request to IBM cloud with the twitter profile in json
    This method use a specific url and API Key

    arguments:
        data_json: string with profile generated

    return:
        response as dictonary

    """

    if (data_json == ''):
        return {'error': 'no json input'}

    url = "https://api.us-south.personality-insights.watson.cloud.ibm.com/"\
          "instances/a3341e42-5c96-4271-ab4e-7085fd3c7804/v3/profile?"\
          "version=2017-10-13/v3/profile?version=2017-10-13&"\
          "consumption_preferences=true&raw_scores=true"

    auth = HTTPBasicAuth(
        'apikey', 'I3f9Cnyv5LWMHFpWG-2yqQlUKre_Gry3VT0E7zBlBMRt')

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'}

    # data_file = open('twt.json','rb')
    data_bytes = bytes(data_json, 'utf-8')
    # data = data_file.read()

    r = requests.post(url, headers=headers, auth=auth, data=data_bytes)

    return r.json()  # class dict
