# Generated by Django 4.1 on 2023-10-07 22:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_carrito_cliente'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='ced',
            field=models.TextField(max_length=12),
        ),
    ]
