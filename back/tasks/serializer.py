from rest_framework import serializers
from .models import Task


class SerializerTask(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'account_id']
        read_only_fields = ['id', 'account_id']
        depth = 1
