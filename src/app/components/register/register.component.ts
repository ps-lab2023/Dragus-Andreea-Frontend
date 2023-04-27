import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ClientService} from "../../services/client/client.service";
import {EmployeeService} from "../../services/employee/employee.service";
import {User} from "../../model/User";
import {Client} from "../../model/Client";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  adminType: boolean = false;
  employeeType: boolean = false;
  clientType: boolean = false;


  name:string = "";
  userName: string = "";
  password: string = "";
  userType: string = "";
  employeeTypeValue: string = "";

  constructor(private userService: UserService, private clientService: ClientService, private employeeService:EmployeeService ) {

  }

  onItemChange(value: string) {
    if(value === 'employeeType') {
      this.userType = 'EMPLOYEE';
      this.employeeType = true;
      this.clientType = false;
      this.adminType = false;
    }

    if(value === 'clientType') {
      this.userType = 'CLIENT';
      this.employeeType = false;
      this.clientType = true;
      this.adminType = false;
    }

    if(value === 'adminType') {
      this.userType = 'ADMIN';
      this.employeeType = false;
      this.clientType = false;
      this.adminType = true;
    }
  }

  onSubmit() {

    if (this.adminType) {
      let admin: User = new User();
      admin.id = undefined;
      admin.name = this.name;
      admin.userName = this.userName;
      admin.password = this.password;
      admin.userType = this.userType;
      this.userService.register(admin).subscribe((token: String) => {
        console.log(token)
      })
    }

      if (this.clientType) {
        /*
        let client: Client = new Client();
        client.id = undefined;
        client.name = this.name;
        client.userName = this.userName;
        client.password = this.password;
        client.userType = this.userType;
        client.loyaltyPoints = 0;

        this.clientService.addClient(client).subscribe((newClient: Client) => {
          console.log(newClient)
        })
         */
        let client: User = new User();
        client.id = undefined;
        client.name = this.name;
        client.userName = this.userName;
        client.password = this.password;
        client.userType = this.userType;

        this.userService.register(client).subscribe((token: String) => {
          console.log(token)
        })

      }

      if (this.employeeType) {
        let employee: Employee = new Employee();
        employee.id = undefined;
        employee.name = this.name;
        employee.userName = this.userName;
        employee.password = this.password;
        employee.userType = this.userType;
        employee.employeeType = this.employeeTypeValue;
        this.userService.registerEmployee(employee).subscribe((token:string) => {
          console.log(token)
        })
      }

    location.href='/login';

  }
}
