import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.4",
  info: {
    title: "API da Arena-Beacht",
    version: "1.0.0",
    description:
      "API para gerenciamento financeiro pessoal,feito por Marquinho o zeru_um lindo maravilhoso fiel romantico gostoso e tudo de bom, gabriel,guissoni e roque tambem ajudou",
  },
  servers: [
    {
      url: "http://localhost:3000/",
      description: "Servidor Local",
    }
  ],
  tags: [
    {
      name: "Usuarios",
      description: "Rotas para cadastro, login, atualização e desativação de usuários",
    },
    {
      name: "Eventos",
      description: "Rotas para  criar os eventos",
    }
    
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    // === Usuarios ===
    
}
}
  },
};

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
});

export default swaggerSpec;