from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import re




def home(request):
    return render (request, "index.html")

def print(request):
    return render (request, "print.html")

def sombras(request):
    return render (request, "sombras.html",{"device" : mobile(request)})
@csrf_exempt
def mobile(request):
    return True if re.compile(r".*(iphone|mobile|androidtouch)",re.IGNORECASE).match(request.META['HTTP_USER_AGENT']) else False