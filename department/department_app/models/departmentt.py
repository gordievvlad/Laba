"""models"""
from django.db import models


class Department(models.Model):
    """Department"""
    department = models.CharField(max_length=25)

    # @property
    # def number_of_employees(self):
    #     """Number of employees"""
    #     return self.employee_set.all().count()
    #
    # @property
    # def the_average_salary(self):
    #     """The average salary"""
    #     wages = 0
    #     emp = self.employee_set.all()
    #     for i in emp:
    #         wages += i.wages
    #     summ = wages // self.employee_set.all().count()
    #     return summ

    class Meta:
        """Sorting"""
        db_table = 'department'
