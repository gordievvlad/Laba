"""models"""
from django.db import models


class Department(models.Model):
    """Department"""
    department = models.CharField(max_length=25)

    @property
    def number_of_employees(self):
        return len(Employee.objects.filter(department=self))

    @property
    def the_average_salary(self):
        wages = 0
        emp = Employee.objects.filter(department=self)
        countt = len(Employee.objects.filter(department=self))
        for i in emp:
            wages += i.wages
        summ = wages // countt
        return summ

    class Meta:
        """Sorting"""
        db_table = 'department'
