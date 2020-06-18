"""
Module: profiletw
Open twitter profile using Twetter API with tweepy library
More information: http://docs.tweepy.org/
"""

import json
import tweepy
from datetime import datetime, timezone
from dateutil.parser import parse
from personins import insights
from pathlib import Path


def get_tw(user_name):
    """
    Read the History Line of a public profile in Twetter,
    and storage in json string.

    Arguments:
        user_name: string with user name of Twitter

    Return:
        Dictionary formatted to IBM requirement
    """

    if (user_name == ''):
        return {'status': 'error',
                'message': 'notwitter',
                'detail': 'Twitter user_name field is empty'}

    # get API Tokens
    tokens_tw = {}
    with open(str(Path.home()) + '/.tokens/twitter.json', 'r') as tok_tw:
            tokens_tw = json.loads(tok_tw.read())

    consumer_key = tokens_tw['consumer_key']
    consumer_secret = tokens_tw['consumer_secret']
    access_token = tokens_tw['access_token']
    access_token_secret = tokens_tw['access_token_secret']

    # OAuth process, using the keys and tokens
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    # Creation of the actual interface, using authentication
    api = tweepy.API(auth)

    count = 0
    tw_dict = {}
    tw_list = []

    """
    here the tweets are limited until 300, this can be changed
    but if it is too high the response will take more time
    """
    try:
        for status in tweepy.Cursor(api.user_timeline,
                                    screen_name=user_name,
                                    tweet_mode="extended").items(300):
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

    except tweepy.TweepError as e:
        return {'status': 'error',
                'message': 'twiterror',
                'detail': str(e)}

    tw_dict['content'] = {}
    tw_dict['content']['contentItems'] = tw_list
    tw_dict['status'] = 'ok'
    tw_dict['message'] = 'twitsucessful'

    return tw_dict
