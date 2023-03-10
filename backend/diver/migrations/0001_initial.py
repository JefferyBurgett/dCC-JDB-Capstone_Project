# Generated by Django 4.1.6 on 2023-02-18 10:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Diver',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_city', models.CharField(max_length=50)),
                ('user_state', models.CharField(blank=True, max_length=50)),
                ('user_country', models.CharField(max_length=50)),
                ('user_type', models.CharField(max_length=50)),
                ('user_cert_agency', models.CharField(max_length=50)),
                ('user_cert_level', models.CharField(max_length=50)),
                ('user_availibility', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
