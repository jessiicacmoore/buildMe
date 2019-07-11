# from django.urls import path
# from .views import *

from projects.api.views import ProfileViewSet, ProjectViewSet, ApplicationViewSet, TaskViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'profile', ProfileViewSet, basename='profiles')
router.register(r'project', ProjectViewSet, basename='projects')
router.register(r'application', ApplicationViewSet, basename='applications')
router.register(r'task', TaskViewSet, basename='tasks')
urlpatterns = router.urls




# urlpatterns = [
  # ------------
  # PROJECTS
  # ------------
  # path('project/', ProjectListView.as_view()),
  # path('project/create', ProjectCreateView.as_view()),
  # path('project/<pk>/', ProjectDetailView.as_view()),
  # path('project/<pk>/update', ProjectUpdateView.as_view()),
  # path('project/<pk>/delete', ProjectDestroyView.as_view()),

  # ------------
  # PROFILES
  # ------------
  # path('profile/', ProfileListView.as_view()),
  # path('profile/create', ProfileCreateView.as_view()),
  # path('profile/<pk>', ProfileDetailView.as_view()),
  # path('profile/<pk>/update', ProfileUpdateView.as_view()),
  # path('profile/<pk>/delete', ProfileDestroyView.as_view()),

  # ------------
  # APPLICATIONS
  # ------------
  # path('application/', ApplicationListView.as_view()),
  # path('application/create', ApplicationCreateView.as_view()),
  # path('application/<pk>/', ApplicationDetailView.as_view()),
  # path('application/<pk>/update', ApplicationUpdateView.as_view()),
  # path('application/<pk>/delete', ApplicationDestroyView.as_view()),
  
  # ------------
  # TASKS
  # ------------
  # path('task/', TaskListView.as_view()),
  # path('task/create', TaskCreateView.as_view()),
  # path('task/<pk>/', TaskDetailView.as_view()),
  # path('task/<pk>/update', TaskUpdateView.as_view()),
  # path('task/<pk>/delete', TaskDestroyView.as_view()),
  
  # path('chats/', ChatListView.as_view()),
  # path('chat/<pk>/', ChatDetailView.as_view())
# ]
