from django.db import models
from authentication.models import User


class Product(models.Model):
    product_author = models.ForeignKey(User, on_delete=models.CASCADE, default="")
    product_brand = models.CharField(max_length=255, default="")
    product_name = models.CharField(max_length=50)    
    product_type = models.CharField(max_length=50)
    product_price = models.DecimalField(max_digits=10, decimal_places= 2, default=0.0)
