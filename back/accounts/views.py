from rest_framework.generics import ListCreateAPIView
from .models import Account
from .serializer import SerializerAccount


class ViewAccount(ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = SerializerAccount
