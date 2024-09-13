from rest_framework import serializers
from .models import Curso


class CursoSerielizer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"