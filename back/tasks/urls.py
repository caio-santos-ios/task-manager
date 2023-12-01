from django.urls import path
from .views import ViewTask, ViewDetailTask

urlpatterns = [
    path('tasks/', ViewTask.as_view()),
    path('tasks/<int:pk>/', ViewDetailTask.as_view())
]
