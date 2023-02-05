from django.db import models
from dive_site.models import Dive_Site
from diver.models import Diver

class DS_Review(models.Model):
    site_id = models.ForeignKey(Dive_Site, on_delete=models.CASCADE)
    diver_id = models.ForeignKey(Diver, on_delete=models.CASCADE)    
    review_date = models.DateTimeField
    review_text = models.CharField(max_length=500)
