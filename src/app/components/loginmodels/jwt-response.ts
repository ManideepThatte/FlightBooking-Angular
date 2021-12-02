export class JwtResponse {
    jwtToken:string;

    constructor(jwt:string)
    {
      this.jwtToken=jwt;
    }
}
