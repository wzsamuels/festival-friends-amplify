export type ProfileInputs = {
  firstName: string,
  lastName: string,
  username: string
  phone: string,
  school: string,
  city: string,
  state: string,
  zipcode: string,
  address: string,
  address2: string,
}

export interface ToastData {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}