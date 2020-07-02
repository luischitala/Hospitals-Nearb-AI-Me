
from django.contrib import admin
from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static
from django.views.generic import TemplateView

from movapp import views as local_views
from rutas import views as rutas_views
from rutas.views import RutaListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', local_views.hello_world),

    path('', rutas_views.inicio),
    path('ruta/', rutas_views.ruta, name='busqueda'),
    path('ruta/resultado', rutas_views.resultadoa, name='ruta_resultado'),
    # path('ruta/', RutaListView.as_view(), name="ruta_list")

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

