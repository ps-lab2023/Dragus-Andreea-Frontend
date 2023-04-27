import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Employee {
  id: number | undefined;
  name: string | undefined = "";
  userType: string = "";
  userName: string | undefined = "";
  password: string | undefined = "";
  employeeType: string = "";
}
export interface EmployeeDetails {
  isSelected: boolean;
  id:number | undefined;
  name:string;
  userType: string;
  userName:string;
  password:string;
  employeeType: string;
  isEdit:boolean;
}

export const EmployeeColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'id',
    type: 'number',
    label: 'id',
    required: true,
  },
  {
    key: 'userType',
    type: 'text',
    label: 'userType',
    required: true,
  },
  {
    key: 'name',
    type: 'text',
    label: 'name',
    required: true,
  },
  {
    key: 'userName',
    type: 'text',
    label: 'userName',
    required: true,
  },
  {
    key: 'password',
    type: 'text',
    label: 'password',
  },
  {
    key: 'employeeType',
    type: 'text',
    label: 'employeeType',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

