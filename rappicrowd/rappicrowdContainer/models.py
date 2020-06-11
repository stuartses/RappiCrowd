from django.conf import settings
from django.db import models
from django.utils import timezone


class Countries(models.Model):
    '''Countries of workers and investors '''
    countryId = models.AutoField(primary_key=True)
    countryName = models.CharField(max_length=256)
    countryCreatedAt = models.DateTimeField(default=timezone.now)
    countryUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_country(self):
        '''function to update the date of countryUpdatedAt field'''
        self.countryUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Countries'''
        return self.countryName

class States(models.Model):
    '''States of the Countries'''
    stateId = models.AutoField(primary_key=True)
    stateName = models.CharField(max_length=256)
    stateCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE)
    stateCreatedAt = models.DateTimeField(default=timezone.now)
    stateUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_state(self):
        '''function to update the date of stateUpdatedAt field'''
        self.stateUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about States'''
        return self.stateName

class Cities(models.Model):
    '''Cities of the States'''
    cityId = models.AutoField(primary_key=True)
    cityName = models.CharField(max_length=256)   
    cityCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE)
    cityStateId = models.ForeignKey(States, on_delete=models.CASCADE)
    cityCreatedAt = models.DateTimeField(default=timezone.now)
    cityUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_city(self):
        '''function to update the date of stateUpdatedAt field'''
        self.cityUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Cities'''
        return self.cityName

class EducationLevels(models.Model):
    '''Education level of the future worker'''
    educationLevelId = models.AutoField(primary_key=True)
    educationLevelName = models.CharField(max_length=256)   
    educationLevelCreatedAt = models.DateTimeField(default=timezone.now)
    educationLevelUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_educationLevel(self):
        '''function to update the date of educationLevelsUpdatedAt field'''
        self.educationLevelUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about EducationLevels'''
        return self.educationLevelName
    
class Currencies(models.Model):
    '''Currencies for investor payment according the future worker or workers'''
    currencyId = models.AutoField(primary_key=True)
    currencyName = models.CharField(max_length=256)   
    currencyCreatedAt = models.DateTimeField(default=timezone.now)
    currencyUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_currency(self):
        '''function to update the date of currencyUpdatedAt field'''
        self.currencyUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Currencies'''
        return self.currencyName

class Docutypes(models.Model):
    '''Type of identification documents for investor and workers'''
    docutypeId = models.AutoField(primary_key=True)
    docutypeName = models.CharField(max_length=256)   
    docutypeCreatedAt = models.DateTimeField(default=timezone.now)
    docutypeUpdatedAt = models.DateTimeField(default=timezone.now)

    def update_docutype(self):
        '''function to update the date of docutypeUpdatedAt field'''
        self.docutypeUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Docutypes'''
        return self.docutypeName
    
class Workers(models.Model):
    '''Information of the workers'''    
    workerCed = models.CharField(max_length=256, primary_key=True)  
    workerName = models.CharField(max_length=256)
    workerLastName = models.CharField(max_length=256)
    workerCelular = models.CharField(max_length=256)
    workerAddress = models.CharField(max_length=256)
    workerCityId = models.ForeignKey(Cities, on_delete=models.CASCADE)
    workerCedCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE)
    workerStateId = models.ForeignKey(States, on_delete=models.CASCADE)
    workerEducationLevelId = models.ForeignKey(EducationLevels, on_delete=models.CASCADE)
    workerSpentsPerMonth = models.IntegerField(default=0)
    workerEarningsPerMonth = models.IntegerField(default=0)
    workerLabourHoursPerDay = models.IntegerField()
    workerCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)
    workerUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)
    workerBirthday = models.DateField()
    workerPassword = models.TextField()
    workerPsychoText = models.TextField(default='None')
    workerLicenseDriver = models.CharField(max_length=256, default='None')    
    workerDaysPerWeek = models.IntegerField()
    workerEmail = models.CharField(max_length=256)
    workerTwitter = models.CharField(max_length=256, default='None')
    workerFacebook = models.CharField(max_length=256, default='None')    
    workerCedDocutypeId = models.ForeignKey(Docutypes, on_delete=models.CASCADE)
    workerCurrencyId = models.ForeignKey(Currencies, on_delete=models.CASCADE)
    workerScore = models.DecimalField(max_digits=3, decimal_places=2, default=0)

    def update_worker(self):
        '''function to update the date of workerUpdatedAt field'''
        self.workerUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Workers'''
        return self.workerName

class Investors(models.Model):
    '''Information of the investors'''
    investorCed = models.CharField(max_length=256, primary_key=True)
    investorName = models.CharField(max_length=256)
    investorLastName = models.CharField(max_length=256)
    investorCelular = models.CharField(max_length=256)
    investorAddress = models.CharField(max_length=256)
    investorCityId = models.ForeignKey(Cities, on_delete=models.CASCADE)
    investorCedCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE)
    investorStateId = models.ForeignKey(States, on_delete=models.CASCADE)
    investorCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)
    investorUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)
    investorPassword = models.TextField()
    investorEmail = models.CharField(max_length=256, default='None')
    investorCedDocutypeId = models.ForeignKey(Docutypes, on_delete=models.CASCADE)
    investorBirthday = models.DateField()

    def update_investor(self):
        '''function to update the date of investorUpdatedAt field'''
        self.investorUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''custormers info about investors'''
        return self.investorName

class InvestorsPerWorkers(models.Model):
    '''Information of the investors which have one or many workers'''
    investorPerWorkerId = models.AutoField(primary_key=True)
    investorPerWorkerInvestorCed = models.ForeignKey(Investors, on_delete=models.CASCADE)
    investorPerWorkerWorkerCed = models.ForeignKey(Workers, on_delete=models.CASCADE)
    investorPerWorkerAmount = models.IntegerField(null=True, default=0)
    investorPerWorkerCurrencyId = models.ForeignKey(Currencies, on_delete=models.CASCADE)
    investorPerWorkerCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)
    investorPerWorkerUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now)

    def update_investorPerWorker(self):
        '''function to update the date of investorPerWorkerUpdatedAt field'''
        self.investorPerWorkerUpdatedAt = timezone.now()
        self.save()
