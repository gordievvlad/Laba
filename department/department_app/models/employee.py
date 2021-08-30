"""Employee"""
from django.db import models
from department_app.models import Department, Positions, Specialization


class Employee(models.Model):
    """Employee"""
    name = models.CharField(max_length=45)
    date_of_birth = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    positions = models.ForeignKey(Positions, on_delete=models.SET_NULL, null=True, blank=True)
    specialization = models.ForeignKey(Specialization, on_delete=models.SET_NULL, null=True, blank=True)
    experience = models.IntegerField()
    wages = models.IntegerField()

    class Meta:
        """Sorting"""
        db_table = 'employee'
