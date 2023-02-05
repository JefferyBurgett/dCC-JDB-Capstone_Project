from django.db import models
from diver.models import Diver

# Create your models here.
class Tip_Trick(models.Model):
    tt_author = models.ForeignKey(Diver, on_delete=models.CASCADE)    
    tt_text = models.CharField