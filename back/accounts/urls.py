from django.urls import path
from .views import ViewAccount
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('accounts/', ViewAccount.as_view()),
    path('accounts/login', TokenObtainPairView.as_view())
]
