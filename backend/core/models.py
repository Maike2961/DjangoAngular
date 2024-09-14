from django.db import models
import uuid

class Base(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)
    
        
class Curso(Base):
    title = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'negocios'

    def __str__(self):
        return self.title
