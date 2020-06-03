'''Contiene los modelos (tablas) de la base de datos con sus campos'''
from django.db import models


class Solicitante(models.Model):
    '''Crea la tabla solicitante con
    los campos (datos del solicitante)'''
    firstName = models.CharField("Nombre", max_length=50)
    lastName = models.CharField("Apellido", max_length=50)
    birthDate = models.DateField("Fecha de nacimiento", blank=True, null=True)
    city = models.CharField("Ciudad de residencia", max_length=50)
    cedula = models.BigIntegerField("Cedula", unique=True)
    email = models.EmailField()
    celular = models.BigIntegerField("Celular")
    monthlyExpenses = models.BigIntegerField("Gastos mensuales")
    availableDays = models.IntegerField("Días disponibles por mes")
    availableHours = models.IntegerField("Horas disponibles por día")
    solicitanteUser = models.CharField("Nombre de usuario", max_length=30)
    solicitantePassword = models.CharField("Contraseña", max_length=30)
    question1 = models.CharField("Pregunta 1", max_length=300, null=True, blank=True)
    question2 = models.CharField("Pregunta 2", max_length=300, null=True, blank=True)
    question3 = models.CharField("Pregunta 3", max_length=300, null=True, blank=True)
    question4 = models.CharField("Pregunta 4", max_length=300, null=True, blank=True)
    question5 = models.CharField("Pregunta 5", max_length=300, null=True, blank=True)
    question6 = models.CharField("Pregunta 6", max_length=300, null=True, blank=True)
    question7 = models.CharField("Pregunta 7", max_length=300, null=True, blank=True)
    question8 = models.CharField("Pregunta 8", max_length=300, null=True, blank=True)
    question9 = models.CharField("Pregunta 9", max_length=300, null=True, blank=True)
    question10 = models.CharField("Pregunta 10", max_length=300, null=True, blank=True)
    question11 = models.CharField("Pregunta 11", max_length=300, null=True, blank=True)
    question12 = models.CharField("Pregunta 12", max_length=300, null=True, blank=True)
    question13 = models.CharField("Pregunta 13", max_length=300, null=True, blank=True)
    question14 = models.CharField("Pregunta 14", max_length=300, null=True, blank=True)
    question15 = models.CharField("Pregunta 15", max_length=300, null=True, blank=True)
    question16 = models.CharField("Pregunta 16", max_length=300, null=True, blank=True)
    question17 = models.CharField("Pregunta 17", max_length=300, null=True, blank=True)
    question18 = models.CharField("Pregunta 18", max_length=300, null=True, blank=True)
    question19 = models.CharField("Pregunta 19", max_length=300, null=True, blank=True)
    question20 = models.CharField("Pregunta 20", max_length=300, null=True, blank=True)
    twitter = models.CharField("twitter", max_length=30, null=True, blank=True)
    registrationDate = models.DateField("Fecha de registro", auto_now_add=True)

    def __str__(self):
        return self.firstName