from django.db import models
from diver.models import Diver

# Create your models here.
class Dive_Site(models.Model):
    site_author = models.ForeignKey(Diver, on_delete=models.CASCADE)
    site_name = models.CharField(max_length=50)    
    site_city = models.CharField(max_length=50)
    site_state = models.CharField(max_length=50)
    site_country = models.CharField(max_length=50)
    