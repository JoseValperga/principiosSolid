import express, { Router } from "express";

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  public readonly port: number;

  //agrego las rutas al servidor
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3000, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    //middlewares - siempre al comienzo

    //express trae un middleware para hacer entrar como json la data
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); //x-www-formurlencoded

    //usar rutas definidas
    this.app.use(this.routes);
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
