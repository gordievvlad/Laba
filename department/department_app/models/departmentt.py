"""models"""
from django.db import models
from .employee import Employee


class Department(models.Model):
    """Department"""
    objects = None
    department = models.CharField(max_length=25)

    def number_of_employees(self):
        return len(Employee.objects.filter(department=f'{self.department}'))

    def the_average_salary(self):
        wages = 0
        emp = Employee.objects.filter(department=f'{self.department}')
        countt = len(Employee.objects.filter(department=f'{self.department}'))
        for i in emp:
            wages += i.wages
        summ = wages // countt
        return summ

    number_of_employees = models.IntegerField(default=number_of_employees, null=True)
    the_average_salary = models.IntegerField(default=the_average_salary, null=True)

    class Meta:
        """Sorting"""
        db_table = 'department'


Department.objects.create(department="Finance")
Department.objects.create(department="Marketing")
Department.objects.create(department="Developer")
