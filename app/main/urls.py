from django.urls import path
from app.main import views

urlpatterns = [
    path('', views.home, name = 'home'), 
    path('print', views.print, name = 'print'), 
    path('sombras', views.sombras, name = 'sombras'), 
]