from django.db import models
from product.models import Product
from diver.models import Diver


class Product_Review(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    review_author = models.ForeignKey(Diver, on_delete=models.CASCADE)
    pd_review_date = models.DateTimeField
    pd_review_text = models.CharField

