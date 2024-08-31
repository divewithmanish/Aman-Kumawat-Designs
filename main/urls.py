from django.contrib import admin
from django.urls import path 
from . import views


urlpatterns =[
path('', views.index, name='index'),
path('index/', views.index, name='index'),
path('about/', views.about, name='about'),
path('contact/', views.contact, name='contact'),
path('appointment/', views.appointment, name='appointment'),
path('feature/', views.feature, name='feature'),
path('project/', views.project, name='project'),
path('service/', views.service, name='service'),
path('team/', views.team, name='team'),
path('testimonial/', views.testimonial, name='testimonial'),
path('404-page/', views.error_404, name='error_404'),  #  Custom 404 page URL
]
