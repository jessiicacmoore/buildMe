from rest_framework import serializers
from projects.models import *

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'profile', 'profile_picture', 'description', 'website', 'linkedin', 'github')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('owner', 'title', 'description', 'project_type', 'is_draft', 'creation_date', 'published_date', 'applications')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application 
        fields = ('applicant', 'project', 'cover_letter', 'is_hired')

# class Chat(serializers.ModelSerializer):
#     class Meta:
#         model = Chat
#         fields = ('user', 'application', 'message', 'timestamp')
 
# class Task(serializers.ModelSerializer):
#     class Meta:
#         model = Task
#         fields = ('project', 'message', 'stage')