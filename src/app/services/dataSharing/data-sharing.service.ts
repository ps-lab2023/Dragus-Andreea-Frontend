import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Employee} from "../../model/Employee";
import {Client} from "../../model/Client";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private loginEmployee = new BehaviorSubject<Employee>({id:undefined, name:'', userName:'', employeeType:'', userType:'EMPLOYEE', password:''});
  loginEmployee$ = this.loginEmployee.asObservable();

  private loginClient = new BehaviorSubject<Client>({id:undefined, name:'', userName:'', userType:'CLIENT', password:'', loyaltyPoints:0});
  loginClient$ = this.loginClient.asObservable();


  constructor() { }

  updateLoginEmployee(loginEmployee: Employee) {
    this.loginEmployee.next(loginEmployee);
  }

  updateLoginClient(loginClient: Client) {
    this.loginClient.next(loginClient);
  }
}
