from django.contrib import admin

# Register your models here.

from .models import CredentialStore

admin.site.register(CredentialStore)