from django.db import models
from accounts.models import Account


class Task(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    is_done = models.BooleanField(default=False)
    account = models.ForeignKey(Account, on_delete=models.CASCADE,
                    related_name='tasks')
