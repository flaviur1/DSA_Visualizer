from django.urls import path
from . import views

urlpatterns = [
    path("bubble-sort/",  views.bubble_sort_steps),
]
