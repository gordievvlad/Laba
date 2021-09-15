"""Specialization"""
from django.db import models


class Specialization(models.Model):
    """Specialization"""
    name = models.CharField(max_length=45)

    class Meta:
        """Sorting"""
        db_table = 'specialization'
