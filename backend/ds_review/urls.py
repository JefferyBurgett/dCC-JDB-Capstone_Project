from django.urls import path, include
from ds_review import views

urlpatterns = [
    path('', views.user_ds_review),
    path('all/', views.get_all_ds_review),
]