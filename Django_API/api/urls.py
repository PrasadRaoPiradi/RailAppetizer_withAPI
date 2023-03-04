from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('task-list/', views.taskList, name="task-list"),
	path('task-detail/<str:pk>/', views.taskDetail, name="task-detail"),
	path('registration/', views.registration, name="registration"),

	path('task-update/<str:pk>/', views.taskUpdate, name="task-update"),
	path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),
    path('checkCredential/<str:email>/<str:passworddata>', views.checkCredential, name='checkcredential'),
    path('verifyCard/<str:cardNumber>/<str:cvv>/<str:nameValue>', views.verfiyCard, name='verifyCard'),
    path('orderdetails/', views.OrderDetails, name='orderdetails'),
    path('CreateOrder/', views.CreateOrder, name='CreateOrder')
]
