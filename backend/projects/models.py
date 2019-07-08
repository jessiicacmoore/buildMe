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
    return f"{self.name}, {self.email}"

class Project(models.Model):
  TYPE_CHOICES = [
    ('maintenance', 'Maintenance'),
    ('full_project', 'Full Project')
  ]
  owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="projects")
  title = models.CharField(max_length=255)
  description = models.TextField()
  project_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='full_project')
  is_draft = models.BooleanField(default=True)
  creation_date = models.DateField(auto_now_add=True)
  published_date = models.DateField(blank=true)
  
class Application(models.Model):
    applicant = 


