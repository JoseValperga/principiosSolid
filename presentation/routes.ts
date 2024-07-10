import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  //static porque no voy a aplicar inyección de dependencias
  static get routes(): Router {
    const router = Router();

    //Definir todas mis rutas
    router.use("/api/auth", AuthRoutes.routes);
    //router.use("api/user");
    //router.use("api/products");
    //router.use("api/categories");

    return router;
  }
}
