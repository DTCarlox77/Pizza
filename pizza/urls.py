from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.home),
    path("products/", views.products),
    path("login/", views.user_login, name="user_login"),
    path("log_out/", views.log_out, name="log_out"),
    path("sign_up/", views.sign_up, name="sign_up"),
    path("cart/", views.cart),
    path("api/orders/", views.create_order, name="create_order"),
    path("orders/", views.orders),
    path("complete_order/<int:order_id>/", views.complete_order, name="complete_order"),
]