from django.urls import path, include
from diver import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_divers),
    path('all/', views.get_all_divers),
]