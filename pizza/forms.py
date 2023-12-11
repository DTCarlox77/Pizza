from django import forms
from django.contrib.auth.forms import UsernameField
from django.contrib.auth import get_user_model

class CustomUserCreationForm(forms.ModelForm):
    password = forms.CharField(label="Contraseña", strip=False, widget=forms.PasswordInput)

    class Meta:
        model = get_user_model()
        fields = ("username", "email", "password")
        field_classes = {"username": UsernameField}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name in self.fields:
            self.fields[field_name].widget.attrs["class"] = "custom-class"  # Agrega tus clases personalizadas aquí si es necesario

    def clean_username(self):
        username = self.cleaned_data["username"]
        if get_user_model().objects.filter(username=username).exists():
            raise forms.ValidationError("Este nombre de usuario ya está en uso.")
        return username

    def clean_email(self):
        email = self.cleaned_data["email"]
        if get_user_model().objects.filter(email=email).exists():
            raise forms.ValidationError("Este correo electrónico ya está registrado.")
        return email
