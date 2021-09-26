"""Views department"""
from rest_framework import generics
from ..rest.serializers import DepartmentListSerializer
from ..models import Department


class DepartmentCreateView(generics.CreateAPIView):
    """Create department"""
    serializer_class = DepartmentListSerializer


class DepartmentListView(generics.ListAPIView):
    """Read all department"""
    serializer_class = DepartmentListSerializer
    queryset = Department.objects.all()


class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Read, update, delete"""
    serializer_class = DepartmentListSerializer
    queryset = Department.objects.all()
