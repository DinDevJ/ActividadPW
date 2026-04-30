import json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

def index(request):
    servicios_sesion = request.session.get('serviciosNuevos', [])
    context = {
        'servicios_json': servicios_sesion
    }
    return render(request, 'index.html', context)

@csrf_exempt
def agregar_servicio(request):
    if request.method == 'POST':
        try:
            nuevo_servicio = json.loads(request.body)
            servicios_guardados = request.session.get('serviciosNuevos', [])
            servicios_guardados.append(nuevo_servicio)
            request.session['serviciosNuevos'] = servicios_guardados
            request.session.modified = True
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return render(request, 'alta.html')


