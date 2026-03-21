import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee as EmployeeService } from '../../services/employee';


@Component({
  selector: 'app-employee',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './employee.html',
  styleUrls: ['./employee.css'],
})
export class Employee implements OnInit {

  employees: any[] = []; 

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

getEmployees() {
  this.employeeService.getEmployee().subscribe(
    res => {
      console.log(res); 
      this.employees = res;
    },
    err => console.log(err)
  );
} 
}