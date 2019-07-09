from rest_framework.generics import ListAPIView, RetrieveAPIView
from projects.models import CustomUser, Project, Application, Chat, Task
from .serializers import *

class ProjectListView(ListAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

class ProjectDetailView(RetrieveAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

class ProfileListView(ListAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = ProfileSerializer

class ProfileDetailView(RetrieveAPIView):
  queryset = CustomUser.objects.all()
  serializer_class = ProfileSerializer

# class ApplicationListView(ListAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# class ApplicationDetailView(RetrieveAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# class TaskListView(ListAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# class TaskDetailView(RetrieveAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# class ChatListView(ListAPIView):
#   queryset = Chat.objects.all()
#   serializer_class = ChatSerializer

# class ChatDetailView(RetrieveAPIView):
#   queryset = Chat.objects.all()
#   serializer_class = ChatSerializer