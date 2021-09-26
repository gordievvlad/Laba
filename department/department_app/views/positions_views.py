"""Views positions"""
from rest_framework import generics
from ..rest.serializers import PositionsListSerializer
from ..models import Positions


class PositionsCreateView(generics.CreateAPIView):
    """Create positions"""
    serializer_class = PositionsListSerializer


class PositionsListView(generics.ListAPIView):
    """Read all positions"""
    serializer_class = PositionsListSerializer
    queryset = Positions.objects.all()


class PositionsDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Read, update, delete"""
    serializer_class = PositionsListSerializer
    queryset = Positions.objects.all()
