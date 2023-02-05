from rest_framework import serializers
from .models import Product_Review

class ProductReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Review
        fields = ['product_id', 'review_author', 'pdreview_date' 'pdreview_text']
        depth = 1