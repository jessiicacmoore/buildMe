# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework import viewsets
from projects.models import CustomUser, Project, Application, Chat, Task
from .serializers import ProfileSerializer, ProjectSerializer, ApplicationSerializer, TaskSerializer

from django_filters.rest_framework import DjangoFilterBackend


from rest_framework import viewsets, filters

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = CustomUser.objects.all()

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('owner__id',)

class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    queryset = Application.objects.all()

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

# ------------------------------
# PROFILE API VIEWS
# ------------------------------

# --- CREATE
# class ProfileCreateView(CreateAPIView):
#   queryset = CustomUser.objects.all()
#   serializer_class = ProfileSerializer

# # --- RETREIVE
# class ProfileListView(ListAPIView):
#   queryset = CustomUser.objects.all()
#   serializer_class = ProfileSerializer

# class ProfileDetailView(RetrieveAPIView):
#   queryset = CustomUser.objects.all()
#   serializer_class = ProfileSerializer

# # --- UPDATE
# class ProfileUpdateView(UpdateAPIView):
#   queryset = CustomUser.objects.all()
#   serializer_class = ProfileSerializer

# # --- DESTROY
# class ProfileDestroyView(DestroyAPIView):
#   queryset = CustomUser.objects.all()
#   serializer_class = ProfileSerializer


# # ------------------------------
# # PROJECT API VIEWS
# # ------------------------------

# # --- CREATE
# class ProjectCreateView(CreateAPIView):
#   queryset = Project.objects.all()
#   serializer_class = ProjectSerializer

# # --- RETREIVE
# class ProjectListView(ListAPIView):
#   queryset = Project.objects.all()
#   serializer_class = ProjectSerializer

# class ProjectDetailView(RetrieveAPIView):
#   queryset = Project.objects.all()
#   serializer_class = ProjectSerializer

# # --- UPDATE
# class ProjectUpdateView(UpdateAPIView):
#   queryset = Project.objects.all()
#   serializer_class = ProjectSerializer

# # --- DESTROY
# class ProjectDestroyView(DestroyAPIView):
#   queryset = Project.objects.all()
#   serializer_class = ProjectSerializer


# # ------------------------------
# # APPLICATION API VIEWS
# # ------------------------------

# # --- CREATE
# class ApplicationCreateView(CreateAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# # --- RETREIVE
# class ApplicationListView(ListAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# class ApplicationDetailView(RetrieveAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# # --- UPDATE
# class ApplicationUpdateView(UpdateAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer

# # --- DESTROY
# class ApplicationDestroyView(DestroyAPIView):
#   queryset = Application.objects.all()
#   serializer_class = ApplicationSerializer


# # ------------------------------
# # TASK API VIEWS
# # ------------------------------

# # --- CREATE
# class TaskCreateView(CreateAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# # --- RETRIEVE
# class TaskListView(ListAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# class TaskDetailView(RetrieveAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# # --- UPDATE
# class TaskUpdateView(UpdateAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# # --- DESTROY
# class TaskDestroyView(DestroyAPIView):
#   queryset = Task.objects.all()
#   serializer_class = TaskSerializer

# class ChatListView(ListAPIView):
#   queryset = Chat.objects.all()
#   serializer_class = ChatSerializer

# class ChatDetailView(RetrieveAPIView):
#   queryset = Chat.objects.all()
#   serializer_class = ChatSerializer






