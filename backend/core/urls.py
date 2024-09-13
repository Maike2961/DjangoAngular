from django.urls import path
from .views import Index, IndexDetails


urlpatterns = [
    path('', Index.as_view()),
    path('<int:id>/', IndexDetails.as_view())
]