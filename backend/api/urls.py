from django.urls import path, include

urlpatterns = [
    path('alg/', include('alg.urls')),
    path('ds/', include('ds.urls')),
]
