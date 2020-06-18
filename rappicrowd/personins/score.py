"""
Module: Score
Calculate the worker score
"""

from statistics import mean


def get_score(personalities):
    """
    Calculates the worker score based on personality insights

    arguments:
        personalities: dictionary with personality facets

    return:
        score: integer
    """

    # list of regular payer facets
    facets_reg = ['facet_adventurousness', 'facet_cautiousness',
                  'facet_dutifulness', 'facet_activity_level',
                  'facet_cooperation', 'facet_modesty',
                  'facet_self_consciousness', 'facet_vulnerability']

    # list of irregular payer facets
    facets_irreg = ['facet_imagination', 'facet_friendliness', 'facet_anxiety']

    list_reg = []
    list_irreg = []

    for personal in personalities:
        facets = personal['children']
        for facet in facets:
            if (facet['trait_id'] in facets_reg):
                list_reg.append(facet['percentile'])

            if (facet['trait_id'] in facets_irreg):
                list_irreg.append(facet['percentile'])

    avg_reg = mean(list_reg)
    avg_irreg = mean(list_irreg)
    score = avg_reg - avg_irreg

    return score
