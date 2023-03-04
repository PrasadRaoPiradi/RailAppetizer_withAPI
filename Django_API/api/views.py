from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CredentialSerializer
from .serializers import PaymentSerializer
from .serializers import OrderSerializer

from .models import CredentialStore
from .models import PaymentsStore
from .models import OrderStore
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		# 'List':'/task-list/',
		# 'Detail View':'/task-detail/<str:pk>/',
		'Create':'/registration/',
		'CreateOrder': '/CreateOrder',
		# 'Update':'/task-update/<str:pk>/',
		# 'Delete':'/task-delete/<str:pk>/',
		'CheckCreds':'/checkCredential/<str:email>/<str:passworddata>',
		'VerifyCard':'/verifyCard/<str:cardNumber>/<str:cvv>/<str:nameValue>',
		'OrderDetails':'/orderdetails/'
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	tasks = CredentialStore.objects.all().order_by('-id')
	serializer = CredentialSerializer(tasks, many=True)
	response = Response(serializer.data, 200)
	response['Access-Control-Allow-Origin'] = '*'	
	response['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	response['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
   
	return response

@api_view(['GET'])
def OrderDetails(request):
	tasks = OrderStore.objects.all().order_by('-id')
	serializer = OrderSerializer(tasks, many=True)
	response = Response(serializer.data, 200)
	response['Access-Control-Allow-Origin'] = '*'	
	response['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	response['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
   
	return response

@api_view(['GET'])
def checkCredential(request, email, passworddata):
	tasks = CredentialStore.objects.get(emailID=email, password =passworddata)
	serializer = CredentialSerializer(tasks, many=False)
	# if serializer.data:
	#  return Response(, 200)
	response = Response(serializer.data, 200)
   
	return response

@api_view(['GET'])
def verfiyCard(request, cardNumber, cvv, nameValue):
	tasks = PaymentsStore.objects.get(creditcardnumber=cardNumber, cvvnumber = cvv, name = nameValue)
	
	serializer = PaymentSerializer(tasks, many=False)
	if serializer.data:
	 return Response(True, 200)
	response = Response(False, 200)
	return Response(response)


@api_view(['GET'])
def taskDetail(request, pk):
	tasks = CredentialStore.objects.get(emailID=pk)
	serializer = CredentialSerializer(tasks, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def registration(request):
	serializer = CredentialSerializer(data=request.data)
    
	if serializer.is_valid():
		serializer.save()
	response = Response(serializer.is_valid())
	response['Access-Control-Allow-Origin'] = '*'	
	response['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	response['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'

	return response

@api_view(['POST'])
def CreateOrder(request):
	serializer = OrderSerializer(data=request.data)
    
	if serializer.is_valid():
		serializer.save()
	response = Response(serializer.is_valid())
	response['Access-Control-Allow-Origin'] = '*'	
	response['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	response['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'

	return response

@api_view(['POST'])
def taskUpdate(request, pk):
	task = CredentialStore.objects.get(id=pk)
	serializer = CredentialSerializer(instance=task, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	task = CredentialStore.objects.get(id=pk)
	task.delete()

	return Response('Item succsesfully delete!')



