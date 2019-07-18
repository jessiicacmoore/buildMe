from rest_framework import serializers
from django.shortcuts import get_object_or_404
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
            'creation_date',
            'applications',
            'team_assembled'
        )

    def put(self, instance, validated_data):
        instance.team_assembled = validated_data.get("team_assembled", instance.team_assembled)
        instance.save()
        print(instance)
        return instance

class ApplicationSerializer(serializers.ModelSerializer):
    applicant = ProfileSerializer(read_only=True);
    project = ProjectSerializer(read_only=True);

    class Meta:
        model = Application 
        fields = (
            'id',
            'applicant',
            'project',
            'cover_letter',
            'is_hired'
        )

    def create(self, validated_data):
        print(self)
        payload = self.data
        user = CustomUser.objects.get(id=3)
        cover_letter = validated_data.get("cover_letter")
        project = Project.objects.get(pk=1)
        newApp =  Application.objects.create(applicant=user, cover_letter=cover_letter, project=project)
        return newApp


    def put(self, instance, validated_data):
        instance.is_hired = validated_data.get("is_hired", instance.is_hired)
        instance.save()
        return instance

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
 


