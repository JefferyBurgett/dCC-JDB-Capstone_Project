from django.urls import path, include
from diver import views

urlpatterns = [
    path('', views.user_divers),
    path('all/', views.get_all_divers),
    path('<str:city>/', views.filter_by_city),
    path('<str:state>/', views.filter_by_state),
    path('<str:country>/', views.filter_by_country),
]