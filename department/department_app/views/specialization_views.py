"""Views specialization"""
from rest_framework import generics
from ..rest.serializers import SpecializationListSerializer
from ..models import Specialization


class SpecializationCreateView(generics.CreateAPIView):
    """Create specialization"""
    serializer_class = SpecializationListSerializer


class SpecializationListView(generics.ListAPIView):
    """Read all specialization"""
    serializer_class = SpecializationListSerializer
    queryset = Specialization.objects.all()


class SpecializationDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Read, update, delete"""
    serializer_class = SpecializationListSerializer
    queryset = Specialization.objects.all()
