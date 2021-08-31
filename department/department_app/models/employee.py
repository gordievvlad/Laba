"""Employee"""
from django.db import models
from department_app.models import Department, Positions, Specialization
# from department.department_app.models.departmentt import Department
# from department.department_app.models.specialization import Specialization
# from department.department_app.models.positions import Positions



class Employee(models.Model):
    """Employeee"""
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
