from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    groups = models.ManyToManyField(
        "auth.Group",
        related_name="customuser_set",
        related_query_name="customuser",
        blank=True,
        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="customuser_set",
        related_query_name="customuser",
        blank=True,
        help_text="Specific permissions for this user.",
    )

    def __str__(self):
        return f"Usuario: {self.username} con correo: {self.email}"
    
class Pizza(models.Model):
    PIZZA_TOPPINS = [
        ("Pizza sencilla", "Pizza sencilla"),
        ("Pizza con cobertura", "Pizza con cobertura"),
        ("Pizza con doble cobertura", "Pizza con doble cobertura"),
        ("Pizza con triple cobertura", "Pizza con triple cobertura"),
        ("Pizza especial", "Pizza especial"),
    ]
    
    PIZZA_TYPES = [
        ("Regular", "Regular"),
        ("Siliciana", "Siliciana"),
    ]
    
    PIZZA_SIZES = [
        ("Pequeña", "Pequeña"),
        ("Grande", "Grande"),
    ]

    pizza_toppins = models.CharField(max_length=40, choices=PIZZA_TOPPINS)
    pizza_type = models.CharField(max_length=40, choices=PIZZA_TYPES)
    pizza_size = models.CharField(max_length=40, choices=PIZZA_SIZES)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.pizza_toppins} {self.pizza_type} de tamaño {self.pizza_size}"

class Topping(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name

class Sub(models.Model):
    
    SUB_SIZES = [
        ("Pequeño", "Pequeño"),
        ("Grande", "Grande"),
    ]
    size = models.CharField(max_length=40, choices=SUB_SIZES)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.size} {self.name}"

class Pasta(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"

class Salad(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"

class DinnerPlatter(models.Model):
    
    DINNER_SIZES = [
        ("Pequeño", "Pequeño"),
        ("Grande", "Grande"),
    ]
    
    name = models.CharField(max_length=50)
    size = models.CharField(max_length=40, choices=DINNER_SIZES)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.size} {self.name}"

class Order(models.Model):
    
    user = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    products = models.JSONField()
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default="pendiente")
    
    def __str__(self):
        return f"Order #{self.id} - {self.user} - {self.date}"