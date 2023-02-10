# Generated by Django 4.1.6 on 2023-02-09 18:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0001_initial'),
        ('diver', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product_Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
                ('review_author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='diver.diver')),
            ],
        ),
    ]
