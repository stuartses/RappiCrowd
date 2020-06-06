"""
Module: Score
Calculate the worker score
"""


def get_score(personalities):
    """
    Calculates the worker score based on personality insights

    arguments:
        personalities: dictionary with personality facets

    return:
        score: integer
    """

    # initial values
    count_reg = 0
    count_irreg = 3

    # number of facets
    num_reg = 9
    num_irreg = 3
    tot_facets = 12

    # percents (number of facets) / total taken from analysis
    perc_reg = num_reg/tot_facets
    perc_irreg = num_irreg/tot_facets
    each_reg = 1/num_reg
    each_irreg = 1/num_irreg

    # list of regular payer facets
    facets_reg = ['facet_adventurousness', 'facet_cautiousness',
                  'facet_dutifulness', 'facet_activity_level',
                  'facet_gregariousness', 'facet_cooperation',
                  'facet_modesty', 'facet_self_consciousness',
                  'facet_vulnerability']

    # list of irregular payer facets
    facets_irreg = ['facet_imagination', 'facet_friendliness', 'facet_anxiety']

    for personal in personalities:
        facets = personal['children']
        for facet in facets:
            if (facet['trait_id'] in facets_reg and
                    facet['percentile'] >= 0.75):

                count_reg += 1

            if (facet['trait_id'] in facets_irreg and
                    facet['percentile'] >= 0.75):

                count_irreg -= 1

    score_reg = count_reg * each_reg
    score_irreg = count_irreg * each_irreg
    score = (score_reg * perc_reg) + (score_irreg * perc_irreg)

    return score
