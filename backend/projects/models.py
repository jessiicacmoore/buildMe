from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
  PROFILE_CHOICES = [
    ('developer', 'Developer'),
    ('business', 'Business')
  ]
  profile = models.CharField(max_length=50, choices=PROFILE_CHOICES, default='developer')
  desc = models.TextField()
  website = models.URLField(blank=True)
  linkedin = models.URLField(blank=True)
  github = models.URLField(blank=True)

  def __str__(self):
    return f"{self.first_name}, {self.email}"

class Project(models.Model):
  TYPE_CHOICES = [
    ('maintenance', 'Maintenance'),
    ('full_project', 'Full Project')
  ]
  owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="projects")
  title = models.CharField(max_length=255)
  description = models.TextField()
  project_type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='full_project')
  is_draft = models.BooleanField(default=True)
  creation_date = models.DateField(auto_now_add=True)
  published_date = models.DateField(blank=True)
  
class Application(models.Model):
  applicant = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="applications")
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="applications")
  cover_letter = models.TextField()
  is_hired = models.BooleanField(default=False)

class Chat(models.Model):
  user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="messages")
  application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name="messages")
  message = models.TextField()
  timestamp = models.DateTimeField(auto_now_add=True)

class Task(models.Model):
  STAGE_CHOICES = [
    ('completed', 'Completed'),
    ('in_progress', 'In progress'),
    ('high', 'High Priority'),
    ('medium', 'Medium Priority'),
    ('low', 'Low Priority'),
  ]
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="tasks")
  message = models.TextField()
  stage = models.CharField(max_length=50, choices=STAGE_CHOICES, default='high')