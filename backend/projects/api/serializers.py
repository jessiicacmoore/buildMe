from rest_framework import serializers
from projects.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('owner', 'title', 'description', 'project_type', 'is_draft', 'creation_date', 'published_date')


 