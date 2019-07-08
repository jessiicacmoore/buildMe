from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from.models import CustomUser, Project, Application, Task

admin.site.register(CustomUser, UserAdmin)
admin.site.register(Project)
admin.site.register(Application)
admin.site.register(Task)
