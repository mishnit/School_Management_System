# Generated by Django 3.0.7 on 2021-01-04 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Others')], max_length=1, null=True)),
                ('date_of_birth', models.DateField(null=True)),
                ('present_address', models.TextField(null=True)),
                ('permanent_address', models.TextField(null=True)),
                ('email', models.CharField(blank=True, max_length=50, null=True)),
                ('telephone', models.CharField(max_length=11, null=True, verbose_name='Telephone no.')),
                ('religion', models.CharField(max_length=30, null=True)),
                ('photo', models.ImageField(null=True, upload_to='photos/%Y/%m/%d/')),
                ('position', models.CharField(max_length=30, null=True)),
            ],
        ),
    ]
