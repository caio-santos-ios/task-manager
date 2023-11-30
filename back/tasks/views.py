from rest_framework.generics import ListCreateAPIView
from .models import Task
from .serializer import SerializerTask


class ViewTask(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = SerializerTask
