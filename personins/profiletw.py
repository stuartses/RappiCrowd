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


def get_tw(user_name):
    """
    Read the History Line of a public profile in Twetter,
    and storage in json string.

    Arguments:
        user_name: string with user name of Twitter

    Return:
        Dictionary formatted to IBM requitement
    """

    if (user_name == ''):
        return {'status': 'error',
                'message': 'notwitter',
                'detail': 'Twitter user_name field is empty'}

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
    here the tweets are limited until 300, this can be changed
    but if it is too high the response will take more time
    """
    try:
        for status in tweepy.Cursor(api.user_timeline,
                                    screen_name=user_name,
                                    tweet_mode="extended").items(300):
            status_dict = {}
            status_dict['content'] = status._json['full_text']
            print("****")
            print(status)

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


def get(user_name='', profile=''):
    """
    Get the User personality insights

    Arguments:
        user_name: screen name of user in Twitter
        profile: long string with text written by user

    Return:
        json with personality insights
    """

    if (profile == '' and user_name == ''):
        msg_error = "{'status': 'error', 'message': 'noinput',"\
                    "'detail': 'Profile and user_name fields are empty'}"
        return msg_error

    out_dict = {}

    # default values
    profile_len = 0
    tw_len = 0
    out_dict['status'] = 'error'
    out_dict['message'] = 'empty'
    out_dict['content'] = ''

    if (profile is not ''):
        profile_len = len(profile.split())

    if (user_name is not ''):
        tw_dict = get_tw(user_name)  # comment line when dev

        # for develop using a json file with a response and avoid request
        """
        tw_dict = {}
        with open('personins/twt2.json', 'r') as f:
            tw2 = f.read()
            tw_dict['content'] = json.loads(tw2)
            tw_dict['status'] = 'ok'
        # end dev.
        """

        if (tw_dict['status'] is not 'error'):
            tw_insights = insights.send('json',
                                        json.dumps(tw_dict['content']), '')

            if (tw_insights['status'] is not 'error'):
                tw_len = tw_insights['content']['word_count']

                out_dict['content'] = tw_insights['content']
                out_dict['status'] = 'ok'
                out_dict['message'] = 'successful'
            else:
                return json.dumps(tw_insights)
        else:
            return json.dumps(tw_dict)

    if (profile_len > tw_len):
        profile_insights = insights.send('text', '', profile)

        if (profile_insights['status'] is not 'error'):
            out_dict['content'] = profile_insights['content']
            out_dict['status'] = 'ok'
            out_dict['message'] = 'successful'
        else:
            return json.dumps(profile_insights)

    return json.dumps(out_dict)
