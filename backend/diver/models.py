from django.db import models
from authentication.models import User

# Create your models here.
class Diver(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    user_type = models.CharField(max_length=50)
    user_cert_agency = models.CharField(max_length=50)
    user_cert_level = models.CharField(max_length=50)