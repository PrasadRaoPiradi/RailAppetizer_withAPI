from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

class CredentialStore(models.Model):
  id = models.AutoField(primary_key=True)
  emailID = models.CharField(max_length=200, unique=True)
  iscustomer = models.BooleanField(default=True)  
  Name = models.CharField(max_length=200)
  password = models.CharField(max_length=100)
  GST = models.CharField(max_length=16, blank=True)
  MobileNumber = models.CharField(max_length=100)
  Location = models.CharField(max_length=200, blank=True)
        
  def __str__(self):
    return self.emailID

class PaymentsStore(models.Model):
  id = models.AutoField(primary_key=True)
  creditcardnumber = models.CharField(max_length=100, validators=[RegexValidator(r'^\d{1,10}$')])
  cvvnumber = models.CharField(max_length=13, validators=[RegexValidator(r'^\d{1,10}$')])
  name = models.CharField(max_length=200)

  def __str__(self):
    return self.name
  
class OrderStore(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200)
  ItemList = models.CharField(max_length=500)
  status = models.CharField(max_length=200)
  price = models.CharField(max_length=50)

  def __str__(self):
    return self.customername
  
  