# Generated by Django 4.1.7 on 2023-11-20 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("customer", "0002_remove_paycard_ord_number_paycard_card_balance"),
    ]

    operations = [
        migrations.AlterField(
            model_name="paycard",
            name="card_condition",
            field=models.PositiveIntegerField(default=0),
        ),
    ]
