from django.shortcuts import render
from .models import Project, Contact
from .forms import ContactForm

def index(request):
    return render(request, 'index.html' )


def about(request):
    return render(request, 'about.html')

def appointment(request):
    return render(request, 'appointment.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid(): 
            form.save()
            return render(request, 'contact.html', {'success': True})
        
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})

def feature(request):
    return render(request, 'feature.html')

def project(request):
    return render(request, 'project.html')

def service(request):
    return render(request, 'service.html')

def team(request):
    return render(request, 'team.html')

def testimonial(request):
    return render(request, 'testimonial.html')

def error_404(request):
    return render(request, '404.html', {})










    


