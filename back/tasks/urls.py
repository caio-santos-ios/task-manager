from django.urls import path
from .views import ViewTask

urlpatterns = [
    path('tasks/', ViewTask.as_view())
]
