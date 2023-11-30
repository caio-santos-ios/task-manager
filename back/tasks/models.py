from django.db import models


class Task(models.Model):
    description = models.TextField()
    is_done = models.BooleanField(default=False)
