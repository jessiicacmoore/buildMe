from rest_framework import serializers
from projects.models import *

class PublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'profile', 'profile_picture', 'description', 'website', 'linkedin', 'github')

class ApplicationSerializer(serializers.ModelSerializer):
    applicant = PublicProfileSerializer(many=False, read_only=True)
    class Meta:
        model = Application 
        fields = ('applicant', 'project', 'cover_letter', 'is_hired')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('message', 'stage')


# class ChatSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Chat
#         fields = ('user', 'message', 'timestamp')
 
class ProjectSerializer(serializers.ModelSerializer):
    owner = PublicProfileSerializer(many=False, read_only=True)
    applications = ApplicationSerializer(many=True, read_only=True)
    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('owner', 'title', 'description', 'project_type', 'tasks', 'is_draft', 'creation_date', 'published_date', 'applications')

class ProfileSerializer(serializers.ModelSerializer):
    applications = ApplicationSerializer(many=True, read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'profile', 'profile_picture', 'description', 'website', 'linkedin', 'github', 'projects', 'applications')


