"""Positions"""
from django.db import models


class Positions(models.Model):
    """Positions"""
    name = models.CharField(max_length=45)

    class Meta:
        """Sorting"""
        ordering = ["id"]
