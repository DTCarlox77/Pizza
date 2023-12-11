from django.shortcuts import render, redirect
from django.contrib.auth import logout, authenticate
from .forms import CustomUserCreationForm
from django.http import JsonResponse
from django.contrib.auth import login
from .models import Pizza, Topping, Pasta, DinnerPlatter, Salad, Sub, Order
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
import json

def home(request):
    return render(request, "home.html")

def products(request):
    pizzas = Pizza.objects.all()
    toppings = Topping.objects.all()
    pastas = Pasta.objects.all()
    ensaladas = Salad.objects.all()
    subs = Sub.objects.all()
    cenas = DinnerPlatter.objects.all()
    return render(request, "products.html", {"pizzas": pizzas, "toppings": toppings, "pastas": pastas, "ensaladas": ensaladas, "subs": subs, "cenas": cenas})

def orders(request):
    
    all_orders = Order.objects.all().order_by('-date')
    
    return render(request, "orders.html", {"orders": all_orders})

def user_login(request):
    
    if request.user.is_authenticated:
        return redirect("/")
    
    invalid_credentials = False

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("/")  
        else:
            invalid_credentials = True

    return render(request, "login.html", {"invalid_credentials": invalid_credentials})

def cart(request):
    
    return render(request, "cart.html")

@csrf_exempt
def complete_order(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    order.status = "completada"
    order.save()

    return JsonResponse({"success": True})
    
@csrf_exempt
def create_order(request):
    
    if request.method == "POST":
        data = json.loads(request.body)
        user = request.user
        price = data.get("price")
        products = data.get("products")
        order = Order.objects.create(user=user, price=price, products=products)

        return JsonResponse({"success": True, "order_id": order.id})

    return JsonResponse({"success": False, "error": "Método no permitido"})    

def log_out(request):
    
    if not request.user.is_authenticated:
        return redirect("/")
    
    logout(request)
    return redirect("/login")

def sign_up(request):
    
    if request.user.is_authenticated:
        return redirect("/")
    
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password"])
            user.save()
            
            login(request, user)
            return redirect("/")
    else:
        form = CustomUserCreationForm()

    return render(request, "sign_up.html", {"form": form})