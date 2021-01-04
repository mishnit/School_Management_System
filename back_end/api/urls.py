from django.urls import path, include
from .views import apiOverview

urlpatterns = [

    path('', apiOverview, name = "api-overview"),

    path('authentication/', include('authentication.urls')),

    path('institution/',include('institution.urls')),

    path('students/',include('students.urls')),

    path('teachers/',include('teachers.urls')),

    path('classes/', include('classes.urls'))
]