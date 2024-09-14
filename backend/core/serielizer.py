from rest_framework import serializers
from .models import Curso, Base


class CursoSerielizer(serializers.ModelSerializer):
    
    class Meta:
        model = Curso
        fields = "__all__"