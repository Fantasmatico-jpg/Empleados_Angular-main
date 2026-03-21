import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee as EmployeeModel } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class Employee {

  URL_API = 'http://localhost:3000/api/employees/';

  constructor(public http: HttpClient) { }

 
  getEmployee() {
    return this.http.get<EmployeeModel[]>(this.URL_API);
  }

  
  deleteEmployee(id: string) {
    return this.http.delete(`${this.URL_API}${id}`);
  }

  
  addEmployee(employee: EmployeeModel) {
    return this.http.post(this.URL_API, employee);
  }

  
  updateEmployee(id: string, employee: EmployeeModel) {
    return this.http.put(`${this.URL_API}${id}`, employee);
  }

}