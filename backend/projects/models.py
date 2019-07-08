from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
  PROFILE_CHOICES = [
    ('developer', 'Developer'),
    ('business', 'Business')
  ]
  name = models.CharField(max_length=255)
  profile = models.CharField(max_length=50, choices=PROFILE_CHOICES, default='developer')
  desc = models.TextField()
  website = models.URLField(blank=True)
  linkedin = models.URLField(blank=True)
  github = models.URLField(blank=True)

  def __str__(self):
    return self.email




