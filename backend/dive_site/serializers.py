from rest_framework import serializers
from .models import Dive_Site

class DiveSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dive_Site
        fields = ['user_id', 'site_name', 'city', 'state', 'country']
        depth = 1