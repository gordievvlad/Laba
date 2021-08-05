=====
Department-app
=====

"Department and Employee Management" is a web application that allows
an administrator to record information about a department and an employee.

Detailed documentation is in the "documentation" directory.

Quick start
-----------

1. Add "department_app" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'department_app',
    ]

2. Include the polls URLconf in your project urls.py like this::

    path('department_app/', include('department.urls')),

3. Run ``python manage.py migrate`` to create the app models.

4. Visit http://127.0.0.1:8000/department_app/ to view departments.