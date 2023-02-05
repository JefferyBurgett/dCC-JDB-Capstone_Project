from rest_framework import serializers
from .models import Diver

class DiverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diver
        fields = ['id', 'first_name', 'last_name', 'email', 'city' 'state' 'country' 'cert_agency' 'cert_level']
        depth = 1
