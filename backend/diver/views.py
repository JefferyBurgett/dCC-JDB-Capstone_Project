from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Diver
from .serializers import DiverSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_divers(request):
    divers = Diver.objects.all()
    serializer = DiverSerializer(divers, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_divers(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = DiverSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        divers = Diver.objects.all()
        serializer = DiverSerializer(divers, many=True)
        return Response(serializer.data)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def divers_detail(request, pk):
        print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
        divers = get_object_or_404(Diver, pk=pk) 
        if request.method == 'PUT':
            serializer = DiverSerializer(divers, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_by_id(request,id):
    divers = get_object_or_404(Diver, pk=id)
    serializer = DiverSerializer(divers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_by_city(request,user_city):
    divers = Diver.objects.filter(user_city=user_city)
    serializer = DiverSerializer(divers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_by_state(request,user_state):
    divers = Diver.objects.filter(user_state=user_state)
    serializer = DiverSerializer(divers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def filter_by_country(request,user_country):
    divers = Diver.objects.filter(user_country=user_country)
    serializer = DiverSerializer(divers, many=True)
    return Response(serializer.data)