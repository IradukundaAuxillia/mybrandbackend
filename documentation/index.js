import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";

const docRouter = Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio",
      version: "1.0.0",
      description: "My brand api Documentation",

      contact: {
        name: "Auxillia",
        url: "https://iradukundaauxillia.github.io/mybrandbackend/",
        email: "iauxillia@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://git.heroku.com/myapiportifolio.git",
      },
    ],
    produces: ["application/json"],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocument = swaggerJsDoc(options);

docRouter.use(
  "/",
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);

export default docRouter;