from django.urls import path
from .views import *

urlpatterns = [
  path('projects/', ProjectListView.as_view()),
  path('project/<pk>/', ProjectDetailView.as_view()),
  path('applications/', ApplicationListView.as_view()),
  path('application/<pk>/', ApplicationDetailView.as_view()),
  # path('tasks/', TaskListView.as_view()),
  # path('task/<pk>/', TaskDetailView.as_view()),
  # path('chats/', ChatListView.as_view()),
  # path('chat/<pk>/', ChatDetailView.as_view())
]
