from rest_framework import serializers
from .models import CredentialStore
from .models import PaymentsStore
from .models import OrderStore


class CredentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = CredentialStore
        fields = '__all__'

    def validate_name(self, value):
        # I assumed that you will that the string value, is a JSON object.
       entered_name = json.loads(value).get('emailID', None)
       
       if entered_name and CredentialStore.objects.filter(emailID=entered_name).exists():
        raise serializers.ValidationError("Name already exists!")
        
       return value


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentsStore
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderStore
        fields = '__all__'
