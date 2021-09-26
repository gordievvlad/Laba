from django.test import TestCase
from ..models import Department, Employee, Positions, Specialization


class CountTestCases(TestCase):
    def setUp(self) -> None:
        self.department = Department.objects.bulk_create([
            Department(department="Finance"),
            Department(department="Marketing"),
            Department(department="Developer"),
        ])
        self.specialization = Specialization.objects.bulk_create([
            Specialization(name='Python'),
            Specialization(name='C#'),
            Specialization(name='Java'),
            Specialization(name='C++'),
        ])
        self.positions = Positions.objects.bulk_create([
            Positions(name='Senior'),
            Positions(name='Middle'),
            Positions(name='Junior'),
            Positions(name='Student'),
        ])
        self.employee = Employee.objects.bulk_create([
            Employee(name='Ihar Nauros', date_of_birth='1990-01-01',
                     department=Department.objects.get(department='Developer'),
                     positions=Positions.objects.get(name='Senior'),
                     specialization=Specialization.objects.get(name='Python'), experience=15, wages=1500),
            Employee(name='Svirydzetski Kanstantsin', date_of_birth='1998-05-05',
                     department=Department.objects.get(department='Developer'),
                     positions=Positions.objects.get(name='Student'),
                     specialization=Specialization.objects.get(name='Python'), experience=1, wages=10),
        ])

    def test_check_count(self):
        pass