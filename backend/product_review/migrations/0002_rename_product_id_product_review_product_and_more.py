# Generated by Django 4.1.6 on 2023-02-12 10:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_review', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product_review',
            old_name='product_id',
            new_name='product',
        ),
        migrations.AlterField(
            model_name='product_review',
            name='pd_review_date',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 12, 4, 27, 32, 846657)),
        ),
    ]
