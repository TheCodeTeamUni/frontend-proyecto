export class Register {
  username: number;
  email: string;
  password: string;
  type: string;

  constructor(username: number, email: string, password: string, type: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
