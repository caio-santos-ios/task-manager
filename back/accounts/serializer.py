from rest_framework import serializers
from .models import Account


class SerializerAccount(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', "username", "password", "email"]
        read_only_fields = ['id']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return Account.objects.create_user(**validated_data)

    def update(self, instance: Account, validated_data: dict):
        for key, value in validated_data.items():
            if key == "password":
                instance.set_password(value)
            else:
                setattr(instance, key, value)
        instance.save()
        return instance
