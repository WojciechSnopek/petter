from django.urls import path
from .views import Home, PetsitterListView


urlpatterns = [
    path('', Home.as_view()),
    path('petsitters/', PetsitterListView.as_view(), name='petsitter-list'),
]