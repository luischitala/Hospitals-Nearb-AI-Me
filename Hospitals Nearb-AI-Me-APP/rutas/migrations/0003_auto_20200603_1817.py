# Generated by Django 3.0.3 on 2020-06-03 23:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rutas', '0002_auto_20200603_1815'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hospital',
            name='AÑO',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='CLAVE_MUNICIPIO',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='TOTAL_CAMAS_AREA_HOSPITALIZACION',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='TOTAL_CAMAS_EN_OTRAS_AREAS_NO_HOSP',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='TOTAL_DE_CONSULTORIOS',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='TOTAL_DE_ENFERMERAS_EN_CONTACTO_CON_EL_PACIENTE',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hospital',
            name='TOTAL_MEDICOS_GENERALES_Y_ESPECIALISTAS',
            field=models.IntegerField(),
        ),
    ]