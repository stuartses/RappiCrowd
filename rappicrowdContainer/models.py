from django.conf import settings
from django.db import models
from django.utils import timezone

class Countries(models.Model):
    '''Countries of admins - workers - investors '''
    countryId = models.AutoField(primary_key=True)
    countryName = models.CharField(max_length=256)
    countryCreatedAt = models.DateTimeField(default=timezone.now)
    countryUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_country(self):
        '''function to update the date of CountryUpdatedAt field'''
        self.countryUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Countries'''
        return self.countryName
