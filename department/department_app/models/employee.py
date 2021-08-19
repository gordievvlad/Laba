"""Employee"""
from django.db import models

from .departmentt import Department
from .positions import Positions
from .specialization import Specialization


class Employee(models.Model):
    """Employee"""
    objects = None
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


Employee.objects.create(name='Ihar Nauros', date_of_birth='01.01.1990', department='Developer', positions='Senior',
                        spesialization='Python', experience=15, wages=1500)
Employee.objects.create(name='Svirydzetski Kanstantsin', date_of_birth='05.05.1998', department='Developer',
                        positions='Student', spesialization='Python', experience=1, wages=10)
