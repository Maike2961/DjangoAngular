from django.urls import path
from .views import Index, IndexDetails


urlpatterns = [
    path('', Index.as_view()),
    path('<uuid:pk>', IndexDetails.as_view())
]