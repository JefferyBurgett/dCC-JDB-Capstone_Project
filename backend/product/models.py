from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=50)    
    product_type = models.CharField(max_length=50)
    product_price = models.IntegerField
