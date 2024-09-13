from django.shortcuts import render
from rest_framework.views import APIView, status
from rest_framework.response import Response
from .serielizer import CursoSerielizer
from .models import Curso

class Index(APIView):
    serializer_class = CursoSerielizer
    queryset = Curso.objects.all()
    
    def get(self, request):
        cursosAll = Curso.objects.all()
        qtd = cursosAll.count()
        seriealizer = self.serializer_class(cursosAll, many=True)
        return Response({"Users": seriealizer.data, "qtd": qtd})
        
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if(serializer.is_valid):
            return Response({"status": status.HTTP_201_CREATED, "Users": serializer.data})
        return Response({"status": status.HTTP_400_BAD_REQUEST})
    
class IndexDetails(APIView):
    serializer_class = CursoSerielizer
    queryset = Curso.objects.all()
    
    def get_Id(pk):
        try:
            return Curso.objects.get(pk)
        except:
            return Response({"status": status.HTTP_404_NOT_FOUND, "message": f'o id não foi {pk} encontrado'})
    
    def get(self, pk, request):
        id = self.get_Id(pk)
        serializer = self.serializer_class(id)
        return Response({"Status": status.HTTP_302_FOUND, "Users": serializer.data})
    
    def put(self, pk, request):
        id = self.get_Id(pk)
        serializer = self.serializer_class(id, data=request.data)
        if serializer.is_valid:
            return Response({"status": status.HTTP_200_OK, "Users": serializer.data})
        return Response({"status": status.HTTP_400_BAD_REQUEST})
    
    def delete(self, pk, request):
        id = self.get_Id(pk)
        id.delete()
        return Response({"status": status.HTTP_204_NO_CONTENT})
        
    