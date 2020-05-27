"""
Module: profiletw
Open twitter profile using Twetter API with tweepy library
and get personality insights
More information: http://docs.tweepy.org/

Use de module insights
"""

import json
import tweepy
from datetime import datetime, timezone
from dateutil.parser import parse
from personins import insights


def get(user_name=''):
    """
    Read the History Line of a public profile in Twetter,
    and storage in json string.
    After get the User personality insights

    Arguments:
        user_name: screen name of user

    Return:
        json with personality insights
    """

    if (user_name == ''):
        return "{'error': 'user name is empty'}"

    # for develop using a json file with a response and avoid request

    else:
        with open('personins/response.json', 'r') as f:
            tw_insights = f.read()
            tw2 = json.loads(tw_insights)
            return json.dumps(tw2)


    consumer_key = 'x94kF5iLFqT7bVHMWPb1ScakZ'
    consumer_secret = 'wOfqgs70te4ExZUX13KfbgkNB3wlXbUvmbsE0XnpVhSZ6M2SMQ'
    access_token = '1141808332031909888-ZfJa77YxSGQ6vsnATQk5IplOoIl3qw'
    access_token_secret = 'ecVLc7cUZxH7MB0pCdrQXTKXcv4KSnT1u1NIHiUeGa0A0'

    # OAuth process, using the keys and tokens
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    # Creation of the actual interface, using authentication
    api = tweepy.API(auth)

    count = 0
    tw_dict = {}
    tw_list = []

    """
    here the tweets are limited until 200, this can be changed
    but if it is too high the response will take may time
    """
    for status in tweepy.Cursor(api.user_timeline,
                                screen_name=user_name,
                                tweet_mode="extended").items(200):
        status_dict = {}
        status_dict['content'] = status._json['full_text']

        # convert string to date and to integer Unix timestamp
        dt = parse(status._json['created_at'])
        date_int = dt.replace(tzinfo=timezone.utc).timestamp()
        status_dict['created'] = date_int

        status_dict['id'] = status._json['id']
        status_dict['language'] = status._json['lang']
        status_dict['contenttype'] = 'text/plain'

        tw_list.append(status_dict)

    tw_dict['contentItems'] = tw_list
    tw_insights = insights.send(json.dumps(tw_dict))

    return json.dumps(tw_insights)
