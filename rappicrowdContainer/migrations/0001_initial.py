# Generated by Django 3.0.6 on 2020-05-24 00:11

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Countries',
            fields=[
                ('countryId', models.AutoField(primary_key=True, serialize=False)),
                ('countryName', models.CharField(max_length=256)),
                ('countryCreatedAt', models.DateTimeField(default=django.utils.timezone.now)),
                ('countryUpdatedAt', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
