from django.db import models


class Card(models.Model):
    name = models.CharField(max_length=1024)
    points = models.IntegerField(blank=True, null=True)
