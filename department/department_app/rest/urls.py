"""Urls"""
from django.urls import path
from ..views import DepartmentCreateView, DepartmentDetailView, DepartmentListView, EmployeeDetailView, \
    EmployeeCreateView, EmployeeListView, PositionsDetailView, PositionsCreateView, PositionsListView, \
    SpecializationDetailView, SpecializationCreateView, SpecializationListView

urlpatterns = [
    path('department/create/', DepartmentCreateView.as_view()),
    path('department/all/', DepartmentListView.as_view()),
    path('department/detail/<int:pk>/', DepartmentDetailView.as_view()),
    path('employee/create/', EmployeeCreateView.as_view()),
    path('employee/all/', EmployeeListView.as_view()),
    path('employee/detail/<int:pk>/', EmployeeDetailView.as_view()),
    path('positions/create/', PositionsCreateView.as_view()),
    path('positions/all/', PositionsListView.as_view()),
    path('positions/detail/<int:pk>/', PositionsDetailView.as_view()),
    path('specialization/create/', SpecializationCreateView.as_view()),
    path('specialization/all/', SpecializationListView.as_view()),
    path('specialization/detail/<int:pk>/', SpecializationDetailView.as_view()),
]
