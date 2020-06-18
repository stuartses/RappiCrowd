"""
Module: getpersoins
Send and get data from Twitter and IBM personality Insights to find score
"""

import json
from personins import profiletw
from personins import insights


def get(user_name='', profile='', mode=''):
    """
    Get the User personality insights

    Arguments:
        user_name: screen name of user in Twitter
        profile: long string with text written by user

    Return:
        json with data analysis
    """

    if (mode == 'dev'):
        profile = 'lorem'

    user_name = user_name.strip()
    if (profile == '' and user_name == ''):
        msg_error = {'status': 'error',
                     'message': 'noinput',
                     'detail': 'Profile and user_name fields are empty'}

        return json.dumps(msg_error)

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
        if (user_name[0] != '@'):
            user_name = '@' + user_name

        # for develop using a json file with a response and avoid request
        if (mode == 'dev'):
            tw_dict = {}
            with open('personins/dev-twitter.json', 'r') as f:
                tw2 = f.read()
                tw_dict['content'] = json.loads(tw2)
                tw_dict['status'] = 'ok'
        else:
            tw_dict = profiletw.get_tw(user_name)

        if (tw_dict['status'] is not 'error'):
            tw_insights = insights.send('json',
                                        json.dumps(tw_dict['content']), '',
                                        mode)

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
        profile_insights = insights.send('text', '', profile, mode)

        if (profile_insights['status'] is not 'error'):
            out_dict['content'] = profile_insights['content']
            out_dict['status'] = 'ok'
            out_dict['message'] = 'successful'
        else:
            return json.dumps(profile_insights)

    return json.dumps(out_dict)
