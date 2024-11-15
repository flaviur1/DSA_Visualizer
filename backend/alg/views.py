from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def bubble_sort_steps(request):
    steps = [
        {1: "Compare adjecent elements."},
        {2: "Swap them if the conditions are met."},
        {3: "Keep going on until the end of the array."}
    ]
    return render(request, "index.html", {"steps" :steps})
