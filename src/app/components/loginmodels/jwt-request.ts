export class JwtRequest {
  public username:string;
  public password:string;
  constructor (uname:string ,pass: string ){
      this.username=uname;
      this.password=pass;

  }
}
