from django.db import models
from django.contrib.auth.models import User

class Business_Profile(models.Model):
  user = models.OneToOneField(
    User,
    on_delete=models.CASCADE,
    primary_key=True
  )
  name = models.CharField(max_length=255)
  desc = models.TextField()
  current_site = models.URLField(blank=True)

  def __str__(self):
    return f"{self.name}"



