import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee as EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css'],
})
export class Employee implements OnInit {

  employees: any[] = [];

  employee: any = {
    name: '',
    office: '',
    position: '',
    salary: null,
    _id: ''
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(
      res => this.employees = res,
      err => console.log(err)
    );
  }

  saveEmployee() {
    if (this.employee._id) {
      this.employeeService.updateEmployee(this.employee._id, this.employee)
        .subscribe(() => {
          this.getEmployees();
          this.resetForm();
        });
    } else {
      const emp = { ...this.employee };
      delete emp._id;

      this.employeeService.addEmployee(emp)
        .subscribe(() => {
          this.getEmployees();
          this.resetForm();
        });
    }
  }

  editEmployee(emp: any) {
    this.employee = { ...emp };
  }

  deleteEmployee(id: string) {
    if (confirm('¿Eliminar empleado?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe(() => this.getEmployees());
    }
  }

  resetForm() {
    this.employee = {
      name: '',
      office: '',
      position: '',
      salary: null,
      _id: ''
    };
  }
}