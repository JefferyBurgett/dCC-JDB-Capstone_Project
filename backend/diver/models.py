from django.db import models

# Create your models here.
class Diver(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    cert_agency = models.CharField(max_length=50)
    cert_level = models.CharField(max_length=50)