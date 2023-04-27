export class Client {

  id: number | undefined;
  name: string | undefined;
  userType: string | undefined;
  userName: string | undefined;
  password: string | undefined;
  loyaltyPoints: number = 0;


}

export interface ClientDetails {
  isSelected: boolean;
  id:number | undefined;
  name:string;
  userType: string;
  userName:string;
  password:string;
  loyaltyPoints: number;
  isEdit:boolean;
}

export const ClientColumns = [
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
    key: 'loyaltyPoints',
    type: 'number',
    label: 'loyaltyPoints',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

