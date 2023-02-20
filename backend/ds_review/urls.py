from django.urls import path, include
from ds_review import views

urlpatterns = [
    path('', views.user_ds_review),
    path('all/', views.get_all_ds_review),
    path('dive_site_id/', views.user_ds_post_review),
    path('<int:dive_site_id>/', views.get_review_by_site_id)

]