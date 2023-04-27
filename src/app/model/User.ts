export class User {

  id: number | undefined;
  name: string = "";
  userType: string = "";
  userName: string = "";
  password: string = "";
}

export interface UserDetails {
  isSelected: boolean;
  id:number | undefined;
  name:string;
  userType: string;
  userName:string;
  password:string;
  isEdit:boolean;
}

export const UserColumns = [
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
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
