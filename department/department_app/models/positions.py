"""Positions"""
from django.db import models


class Positions(models.Model):
    """Positions"""
    objects = None
    name = models.CharField(max_length=45)

    class Meta:
        """Sorting"""
        db_table = 'positions'


Positions.objects.create(name='Senior')
Positions.objects.create(name='Middle')
Positions.objects.create(name='Junior')
Positions.objects.create(name='Student')
