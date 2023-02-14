from django.urls import path, include
from dive_site import views

urlpatterns = [
    path('', views.user_dive_sites),
    path('all/', views.get_all_dive_sites),
    path('<str:site_country>/', views.filter_by_country),
]