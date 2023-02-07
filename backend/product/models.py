from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=50)    
    product_type = models.CharField(max_length=50)
    product_price = models.DecimalField(max_digits=10, decimal_places= 2, default=0.0)
