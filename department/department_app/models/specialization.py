"""Specialization"""
from django.db import models


class Specialization(models.Model):
    """Specialization"""
    objects = None
    name = models.CharField(max_length=45)

    class Meta:
        """Sorting"""
        db_table = 'specialization'


Specialization.objects.create(name='Python')
Specialization.objects.create(name='C#')
Specialization.objects.create(name='Java')
Specialization.objects.create(name='C++')
