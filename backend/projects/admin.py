from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin



from.models import CustomUser, Project, Application, Task


class CustomUserAdmin(UserAdmin):

    fieldsets = (
          (None, {'fields': ('email', 'password')}),
          ('Personal info', {'fields': ('first_name', 'last_name', 'profile', 'profile_picture', 'description', 'website', 'linkedin', 'github')}),
          ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',
                                        'groups', 'user_permissions')}),
          ('Important dates', {'fields': ('last_login', 'date_joined')}),
      )

    model = CustomUser
    list_display = ['email', 'username', 'website']

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Project)
admin.site.register(Application)
admin.site.register(Task)
