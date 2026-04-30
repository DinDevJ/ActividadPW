from django import forms
from .models import Servicios

class ServicioFormulario(forms.ModelForm):
    class Meta:
        model = Servicios
        fields = ['nombre', 'descripcion']
