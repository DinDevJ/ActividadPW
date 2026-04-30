from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import Servicios
from django.views.decorators.csrf import csrf_exempt

def index(request):
    # Obtener servicios de la BASE DE DATOS en lugar de la sesión (Requisito Actividad 3)
    servicios_bd = Servicios.objects.all()
    servicios_lista = []
    
    for s in servicios_bd:
        servicios_lista.append({
            'name': s.nombre,
            'description': s.descripcion,
            'price': float(s.precio),
            'isMonthly': s.es_mensual,
            'icon': s.icono if s.icono else 'https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/image.svg'
        })
        
    context = {
        'servicios_json': servicios_lista
    }
    return render(request, 'index.html', context)

@csrf_exempt
def agregar_servicio(request):
    if request.method == 'POST':
        try:
            nuevo_servicio = json.loads(request.body)
            
            # Guardar en la Base de Datos (Actividad 3)
            Servicios.objects.create(
                nombre=nuevo_servicio.get('name', ''),
                descripcion=nuevo_servicio.get('description', ''),
                precio=nuevo_servicio.get('price', 0),
                es_mensual=nuevo_servicio.get('isMonthly', False),
                icono=nuevo_servicio.get('icon', '')
            )
            
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
            
    # Renderizar el formulario si es GET
    return render(request, 'alta.html')

def showBD(request):
    todos_los_servicios = Servicios.objects.all()
    contexto = {
        'lista_servicios': todos_los_servicios
    }
    return render(request, 'showBD.html', contexto)
