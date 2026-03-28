import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee-service';

@Component({
  selector: 'app-employee-component',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './employee-component.html'
  
})
export class EmployeeComponent implements OnInit {

  employee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employee = res;
      });
  }

  addEmployee(form: any) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(() => {
          this.getEmployees();
          form.reset();
        });
    } else {
      this.employeeService.createEmployee(form.value)
        .subscribe(() => {
          this.getEmployees();
          form.reset();
        });
    }
  }

  deleteEmployee(_id: string) {
    if (confirm('¿Eliminar empleado?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(() => this.getEmployees());
    }
  }

  editEmployee(employee: Employee) {
    this.employee = employee;
  }
}