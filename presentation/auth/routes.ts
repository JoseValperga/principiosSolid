import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
  //static porque no voy a aplicar inyección de dependencias
  static get routes(): Router {
    const router = Router();
    const controller = new AuthController();

    //Definir todas mis rutas de auth
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);

    return router;
  }
}
