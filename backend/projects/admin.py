from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from.models import CustomUser, Project

admin.site.register(CustomUser, UserAdmin)
admin.site.register(Project)

# Register your models here.
