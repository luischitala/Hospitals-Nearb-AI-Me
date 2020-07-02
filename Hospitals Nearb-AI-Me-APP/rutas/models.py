from django.db import models
from django_pandas.managers import DataFrameManager

# Create your models here.

class Hospital(models.Model):
    AÑO = models.IntegerField()
    CLUES = models.CharField(max_length=15)
    CLAVE_INSTITUCION = models.CharField(max_length=10)
    CLAVE_MUNICIPIO = models.IntegerField()
    LATITUD = models.FloatField(max_length=15)
    LONGITUD = models.FloatField(max_length=15)
    DISTANCIA  = models.FloatField(max_length=5)
    TIEMPO_TRANSLADO = models.FloatField(max_length=5)
    NOMBRE_DE_LA_UNIDAD = models.CharField(max_length=255)
    TOTAL_DE_CONSULTORIOS = models.IntegerField(null=True)
    TOTAL_CAMAS_AREA_HOSPITALIZACION = models.IntegerField(null=True)
    TOTAL_CAMAS_EN_OTRAS_AREAS_NO_HOSP = models.IntegerField(null=True)
    TOTAL_MEDICOS_GENERALES_Y_ESPECIALISTAS = models.IntegerField(null=True)
    TOTAL_DE_ENFERMERAS_EN_CONTACTO_CON_EL_PACIENTE = models.IntegerField(null=True)

    def __str__(self):
        return self.NOMBRE_DE_LA_UNIDAD

    objects = DataFrameManager()

class Calculo(models.Model):
    fecha_registro = models.DateTimeField(auto_now_add=True)
    latitud = models.FloatField(null=False)
    longitud = models.FloatField(null=False)

    def __str__(self):
        return str(fecha_registro)
    
    