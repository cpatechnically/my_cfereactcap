from django.shortcuts import render,redirect


def npxview(request):
    template = 'npx_home.html'
    template_name = str(template)

    context = {

    }
    return render(request,template_name)