"""cap URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from captures.views import (
    #EmailCaptureCreateAPIView,
    EmailCaptureAPIView,
    EmailCaptureAPIDetailView,
)

from cap.views import npxview

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='home.html'),name="index"),
    path('overview/', TemplateView.as_view(template_name='npx_home_script.html')),
    path('npxhome/',npxview,name="npxhome"),
    #path('api/capture/email/', EmailCaptureCreateAPIView.as_view()),
    path('api/capture/email/', EmailCaptureAPIView.as_view()),
    path('api/capture/email/<pk>/', EmailCaptureAPIDetailView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
