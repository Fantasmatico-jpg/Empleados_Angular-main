import { Component, OnInit } from '@angular/core';
import { Employee as EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  styleUrls: ['./employee.css'], 
})
export class Employee implements OnInit {

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}