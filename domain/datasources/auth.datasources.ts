import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";

export abstract class AuthDataSource {
  //abstract porque no voy a crear instancias de esta clase
  //sirve para definir reglas de definicion
  //un datasource, no importa si es mysql, postgre, mongo o lo que sea
  //tiene que tener un metodo para registrar un usuario que debe recibir 
  //el dto y regresar una entidad

  //abstract login

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
