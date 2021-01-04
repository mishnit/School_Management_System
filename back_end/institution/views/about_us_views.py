from ..models import Institution
from rest_framework import permissions

from rest_framework.exceptions import (
    NotFound
)
from rest_framework.generics import (
    ListAPIView
)

from ..serializers import (
    AboutUsDetailsSerializer
)

class AboutUsDetails(ListAPIView):

    permission_classes = [permissions.AllowAny]
    serializer_class = AboutUsDetailsSerializer

    def get_queryset(self):

        queryset = Institution.objects.all()

        if queryset:
            return queryset
        else:
            raise NotFound("The information hasn't been added yet!")