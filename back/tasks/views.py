from rest_framework import generics 
from .models import Task
from .serializer import SerializerTask
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class ViewTask(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = SerializerTask

    def perform_create(self, serializer):
        user_account = self.request.user.id
        return serializer.save(account_id=user_account)


class ViewDetailTask(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = SerializerTask
