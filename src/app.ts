import { Server } from "../presentation/server";
import { envs } from "./config/index";

const main = async () => {
  //await base de datos
  //inicio del servidor
  new Server({
    port: envs.PORT,
  }).start();
};

(() => {
  main();
})();
