from django.shortcuts import render
from rest_framework.decorators import api_view  # Decorator to declare API views
from rest_framework.response import Response    # Used to return API responses
from .models import Item                       # Import the Item model
from .serializer import ItemSerialzer          # Import the serializer for Item

@api_view(['POST', "GET"])  # Allow only POST and GET requests for this view
def create_view(request):
    # Handle POST request: create a new Item
    if request.method == 'POST':
        serializer = ItemSerialzer(data=request.data)  # Deserialize input data
        if serializer.is_valid():                      # Validate the data
            serializer.save()                          # Save new Item to DB
            return Response(serializer.data, status=201)  # Return created item with 201 status
        return Response(serializer.errors, status=400)    # Return errors with 400 status

    # Handle GET request: list all Items
    elif request.method == 'GET':
        items = Item.objects.all()                     # Get all Item objects
        serializer = ItemSerialzer(items, many=True)   # Serialize all items
        return Response(serializer.data)               # Return serialized data
