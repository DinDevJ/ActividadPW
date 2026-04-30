from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='inicio'),
    path('agregar/', views.agregar_servicio, name='agregar_servicio'),
    path('showBD/', views.showBD, name='showBD'),
]
