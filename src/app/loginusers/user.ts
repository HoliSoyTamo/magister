export class User {
  public id: number;
  public name: string;
  public user: string;
  public password: string;
  public ocupation: string;

  constructor(Id: number, name: string, user: string, password: string, ocupation: string) {
    this.id = Id;
    this.name = name;
    this.user = user;
    this.password = password;
    this.ocupation = ocupation;
  }
}
