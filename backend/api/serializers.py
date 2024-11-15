from rest_framework import serializers
from .models import Petsitter

class PetsitterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petsitter
        fields = '__all__'