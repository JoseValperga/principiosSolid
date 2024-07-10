import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";

export abstract class AuthRepository {
  //La idea aquí es conocer los métodos a llamar desde datasource
  //con cualquier cambio solo cambiamos el datasource
  //sin cambios en la base de datos
  //con esto podemos cambiar al datasource
  

  //abstract login
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
