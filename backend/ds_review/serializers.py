from rest_framework import serializers
from .models import DS_Review

class DS_ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = DS_Review
        fields = ['site_id', 'diver_id', 'review_date', 'review_text']
        depth = 1