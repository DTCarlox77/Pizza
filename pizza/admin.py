from django.contrib import admin
from .models import Pizza, Topping, Sub, Pasta, Salad, DinnerPlatter, Order

admin.site.register(Pizza)
admin.site.register(Topping)
admin.site.register(Sub)
admin.site.register(Pasta)
admin.site.register(Salad)
admin.site.register(DinnerPlatter)
admin.site.register(Order)