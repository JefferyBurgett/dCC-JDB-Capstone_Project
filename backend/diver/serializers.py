from rest_framework import serializers
from .models import Diver

class DiverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diver
        fields = ['id', 'user', 'user_type', 'user_cert_agency', 'user_cert_level']
        depth = 1
2