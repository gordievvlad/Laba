"""Serializers"""
from rest_framework import serializers
from ..models import Department, Employee, Specialization, Positions


class DepartmentListSerializer(serializers.ModelSerializer):
    """Serializers department"""
    class Meta:
        """All fields department"""
        model = Department
        fields = '__all__'


class EmployeeListSerializer(serializers.ModelSerializer):
    """Serializers employee"""
    class Meta:
        """All fields employee"""
        model = Employee
        fields = '__all__'


class PositionsListSerializer(serializers.ModelSerializer):
    """Serializers positions"""
    class Meta:
        """All fields positions"""
        model = Positions
        fields = '__all__'


class SpecializationListSerializer(serializers.ModelSerializer):
    """Serializers specialization"""
    class Meta:
        """All fields specialization"""
        model = Specialization
        fields = '__all__'
