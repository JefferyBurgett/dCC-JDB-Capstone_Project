from django.urls import path, include
from diver import views

urlpatterns = [
    path('', views.user_divers),
    path('all/', views.get_all_divers),
]