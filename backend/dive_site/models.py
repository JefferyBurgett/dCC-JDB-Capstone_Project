from django.db import models
from authentication.models import User

# Create your models here.
class Dive_Site(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    site_name = models.CharField(max_length=50)    
    site_city = models.CharField(max_length=50)
    site_state = models.CharField(max_length=50, blank= True)
    site_country = models.CharField(max_length=50)
    