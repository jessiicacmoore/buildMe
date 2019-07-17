from rest_framework import serializers
from projects.models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id',
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
            'profile',
            'profile_picture',
            'description',
            'website',
            'linkedin',
            'github',
            'applications',
            'projects'
        )

class ProjectSerializer(serializers.ModelSerializer):
    owner = ProfileSerializer(read_only=True);
    class Meta:
        model = Project
        fields = (
            'id',
            'owner',
            'title',
            'description',
            'project_type',
            # 'is_draft',
            'creation_date',
            # 'published_date',
            'applications',
            'tasks'
        )

class ApplicationSerializer(serializers.ModelSerializer):
    project = ProjectSerializer(read_only=True);
    applicant = ProfileSerializer(read_only=True);

    class Meta:
        model = Application 
        fields = (
            'id',
            'applicant',
            'project',
            'cover_letter',
            'is_hired'
        )

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'id',
            'project',
            'message',
            'stage'
        )

# class ChatSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Chat
#         fields = ('user', 'message', 'timestamp')
 


