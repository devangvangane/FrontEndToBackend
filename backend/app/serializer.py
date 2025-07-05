from rest_framework import serializers
from .models import Item

class ItemSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        # fields = ['id', 'name', 'desc']  # Explicitly specify fields if needed