"""models"""
from django.db import models


class Department(models.Model):
    """Department"""
    department = models.CharField(max_length=25)
    dumber_of_employees = models.IntegerField()
    the_average_salary = models.IntegerField()


class Positions(models.Model):
    """Positions"""
    name = models.CharField(max_length=45)


class Specialization(models.Model):
    """Specialization"""
    name = models.CharField(max_length=45)


class Employee(models.Model):
    """Employee"""
    name = models.CharField(max_length=45)
    date_of_birth = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    positions = models.ForeignKey(Positions, on_delete=models.SET_NULL, null=True, blank=True)
    specialization = models.ForeignKey(Specialization, on_delete=models.SET_NULL, null=True, blank=True)
    experience = models.IntegerField()
    wages = models.IntegerField()
