# Base Django
from django.forms import ModelForm
from django.forms.widgets import Select
# Es necesario importar los modelos a pasar a formulario
from rutas.models import (
    Calculo,
   )


class CalculoForm(ModelForm):
    class Meta:
        model = Calculo
        fields = '__all__'