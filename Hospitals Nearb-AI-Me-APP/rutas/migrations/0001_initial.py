# Generated by Django 3.0.3 on 2020-06-03 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hospitale',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AÑO', models.IntegerField(max_length=10)),
                ('CLUES', models.CharField(max_length=15)),
                ('CLAVE_INSTUTUCION', models.CharField(max_length=10)),
                ('CLAVE_MUNICIPIO', models.IntegerField(max_length=5)),
                ('LATITUD', models.FloatField(max_length=15)),
                ('LONGITUD', models.FloatField(max_length=15)),
                ('DISTANCIA', models.FloatField(max_length=5)),
                ('TIEMPO_TRANSLADO', models.FloatField(max_length=5)),
                ('NOMBRE_DE_LA_UNIDAD', models.CharField(max_length=150)),
                ('TOTAL_DE_CONSULTORIOS', models.IntegerField(max_length=5)),
                ('TOTAL_CAMAS_AREA_HOSPITALIZACION', models.IntegerField(max_length=5)),
                ('TOTAL_CAMAS_EN_OTRAS_AREAS_NO_HOSP', models.IntegerField(max_length=5)),
                ('TOTAL_MEDICOS_GENERALES_Y_ESPECIALISTAS', models.IntegerField(max_length=5)),
                ('TOTAL_DE_ENFERMERAS_EN_CONTACTO_CON_EL_PACIENTE', models.IntegerField(max_length=5)),
            ],
        ),
    ]
