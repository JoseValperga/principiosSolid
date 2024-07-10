
//la entidad es muy similar a lo que
//terminaremos grabando enla base de datos

export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string[],
    public img?: string
  ) {}
}
