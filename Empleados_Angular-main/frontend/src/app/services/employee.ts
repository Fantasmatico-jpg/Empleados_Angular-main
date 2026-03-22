import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Employee {

  URL_API = 'http://localhost:3000/api/employees/';

  constructor(private http: HttpClient) {}

  getEmployee() {
    return this.http.get<any[]>(this.URL_API);
  }

  addEmployee(emp: any) {
    return this.http.post(this.URL_API, emp);
  }

  updateEmployee(id: string, emp: any) {
    return this.http.put(this.URL_API + id, emp);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.URL_API + id);
  }
}