"""models"""
from django.db import models


class Department(models.Model):
    """Department"""
    department = models.CharField(max_length=25)
    dumber_of_employees = models.IntegerField(null=True)
    the_average_salary = models.IntegerField(null=True)

    class Meta:
        """Sorting"""
        db_table = 'department'
        ordering = ["id"]
