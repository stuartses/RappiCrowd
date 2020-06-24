from django.conf import settings
from django.db import models
from django.utils import timezone # library to use timezone hour and date


class Countries(models.Model):
    '''Countries of workers and investors '''
    countryId = models.AutoField(primary_key=True) # autonumber primary key
    countryName = models.CharField(max_length=256) # maximun of 256 chars
    countryCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time 
    countryUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_country(self):
        '''function to update the date of countryUpdatedAt field'''
        self.countryUpdatedAt = timezone.now() 
        self.save()

    def __str__(self):
        '''customers info about Countries'''
        return self.countryName # this is shown when you use django administration

class States(models.Model):
    '''States of the Countries'''
    stateId = models.AutoField(primary_key=True) # autonumber primary key
    stateName = models.CharField(max_length=256) # maximun of 256 chars
    stateCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE) # foreign key from countries model
    stateCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time
    stateUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_state(self):
        '''function to update the date of stateUpdatedAt field'''
        self.stateUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about States'''
        return self.stateName 

class Cities(models.Model):
    '''Cities of the States'''
    cityId = models.AutoField(primary_key=True) # autonumber primary key
    cityName = models.CharField(max_length=256) # maximun of 256 char  
    cityCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE) # foreign key from countries model
    cityStateId = models.ForeignKey(States, on_delete=models.CASCADE) # foreign key from states model
    cityCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time
    cityUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_city(self):
        '''function to update the date of stateUpdatedAt field'''
        self.cityUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Cities'''
        return self.cityName # this is shown when you use django administration

class EducationLevels(models.Model):
    '''Education level of the future worker'''
    educationLevelId = models.AutoField(primary_key=True) # autonumber primary key
    educationLevelName = models.CharField(max_length=256) # maximun of 256 char   
    educationLevelCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time
    educationLevelUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_educationLevel(self):
        '''function to update the date of educationLevelsUpdatedAt field'''
        self.educationLevelUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about EducationLevels'''
        return self.educationLevelName # this is shown when you use django administration
    
class Currencies(models.Model):
    '''Currencies for investor payment according the future worker or workers'''
    currencyId = models.AutoField(primary_key=True) # autonumber primary key
    currencyName = models.CharField(max_length=256) # maximun of 256 chars  
    currencyCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time
    currencyUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_currency(self):
        '''function to update the date of currencyUpdatedAt field'''
        self.currencyUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Currencies'''
        return self.currencyName # this is shown when you use django administration

class Docutypes(models.Model):
    '''Type of identification documents for investor and workers'''
    docutypeId = models.AutoField(primary_key=True) # autonumber primary key
    docutypeName = models.CharField(max_length=256) # maximun of 256 chars 
    docutypeCreatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time
    docutypeUpdatedAt = models.DateTimeField(default=timezone.now) # if the field is not filled, it is stored automatically with the current date and time

    def update_docutype(self):
        '''function to update the date of docutypeUpdatedAt field'''
        self.docutypeUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Docutypes'''
        return self.docutypeName # this is shown when you use django administration
    
class Workers(models.Model):
    '''Information of the workers'''    
    workerCed = models.CharField(max_length=256, primary_key=True) # maximun of 256 chars primary key  
    workerName = models.CharField(max_length=256) # maximun of 256 chars
    workerLastName = models.CharField(max_length=256) # maximun of 256 chars
    workerCelular = models.CharField(max_length=256) # maximun of 256 chars
    workerAddress = models.CharField(max_length=256) # maximun of 256 chars
    workerCityId = models.ForeignKey(Cities, on_delete=models.CASCADE) # foreign key from cities model
    workerCedCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE) # foreign key from countries model
    workerStateId = models.ForeignKey(States, on_delete=models.CASCADE) # foreign key from states model
    workerEducationLevelId = models.ForeignKey(EducationLevels, on_delete=models.CASCADE) # foreign key from educationLevels model
    workerSpentsPerMonth = models.IntegerField(default=0) # integer field with zero default value
    workerEarningsPerMonth = models.IntegerField(default=0) # integer field with zero default value
    workerLabourHoursPerDay = models.IntegerField() # integer field
    workerCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored
    workerUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored
    workerBirthday = models.DateField() # only the date for birthday
    workerPassword = models.TextField() # textfield because using encryptation the password can be very long
    workerPsychoText = models.TextField(default='None') # default none because this is stored in the second view of worker profile questions
    workerLicenseDriver = models.CharField(max_length=256, default='None') # number of the license driver or default none   
    workerDaysPerWeek = models.IntegerField() # days that a person will work per one week
    workerEmail = models.CharField(max_length=256) # maximum of 256 chars
    workerTwitter = models.CharField(max_length=256, default='None') # maximun of 256 chars and default none if the person does not have twitter
    workerFacebook = models.CharField(max_length=256, default='None') # maximun of 256 chars and default none if the person does not have facebook  
    workerCedDocutypeId = models.ForeignKey(Docutypes, on_delete=models.CASCADE) # foreign key from docutypes model
    workerCurrencyId = models.ForeignKey(Currencies, on_delete=models.CASCADE) # foreign key from currencies model
    workerScore = models.DecimalField(max_digits=3, decimal_places=2, default=0) # score from ibm api logic in personins folder app 

    def update_worker(self):
        '''function to update the date of workerUpdatedAt field'''
        self.workerUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''customers info about Workers'''
        return self.workerName # this is shown when you use django administration

class Investors(models.Model):
    '''Information of the investors'''
    investorCed = models.CharField(max_length=256, primary_key=True) # maximum of 256 chars primary key
    investorName = models.CharField(max_length=256) # maximum of 256 chars
    investorLastName = models.CharField(max_length=256) # maximum of 256 chars
    investorCelular = models.CharField(max_length=256) # maximum of 256 chars
    investorAddress = models.CharField(max_length=256) # maximum of 256 chars
    investorCityId = models.ForeignKey(Cities, on_delete=models.CASCADE) # foreign key from cities model
    investorCedCountryId = models.ForeignKey(Countries, on_delete=models.CASCADE) # foreign key from countries model
    investorStateId = models.ForeignKey(States, on_delete=models.CASCADE) # foreign key from states model
    investorCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored
    investorUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored
    investorPassword = models.TextField() # textfield because using encryptation the password can be very long
    investorEmail = models.CharField(max_length=256, default='None') # maximum of 256 chars
    investorCedDocutypeId = models.ForeignKey(Docutypes, on_delete=models.CASCADE) # foreign key from docutypes model
    investorBirthday = models.DateField() # only the date for birthday

    def update_investor(self):
        '''function to update the date of investorUpdatedAt field'''
        self.investorUpdatedAt = timezone.now()
        self.save()

    def __str__(self):
        '''custormers info about investors'''
        return self.investorName # this is shown when you use django administration

class InvestorsPerWorkers(models.Model):
    '''Information of the investors which have one or many workers'''
    investorPerWorkerId = models.AutoField(primary_key=True) # autonumber primary key
    investorPerWorkerInvestorCed = models.ForeignKey(Investors, on_delete=models.CASCADE) # foreign key from investors model
    investorPerWorkerWorkerCed = models.ForeignKey(Workers, on_delete=models.CASCADE) # foreign key from workers model
    investorPerWorkerAmount = models.IntegerField(null=True, default=0) # field for amount invested for the investor in the worker
    investorPerWorkerCurrencyId = models.ForeignKey(Currencies, on_delete=models.CASCADE) # foreign key from currencies model
    investorPerWorkerCreatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored
    investorPerWorkerUpdatedAt = models.DateTimeField(null=True, blank=True, default=timezone.now) # this field is not filled in the view current datetime stored

    def update_investorPerWorker(self):
        '''function to update the date of investorPerWorkerUpdatedAt field'''
        self.investorPerWorkerUpdatedAt = timezone.now()
        self.save()
