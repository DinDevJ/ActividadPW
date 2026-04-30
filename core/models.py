from django.db import models

class Servicios(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=500)
    precio = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    es_mensual = models.BooleanField(default=False)
    icono = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.nombre
