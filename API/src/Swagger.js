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
  "/usuarios": {
    post: {
      tags: ["Usuarios"],
      summary: "Cria um novo usuário",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              nome: "João Silva",
              email: "joao@email.com",
              senha: "senha123",
              telefone: "11999999999",
              foto_perfil: "https://link.com/foto.jpg",
              data_cadastro: "2025-06-12"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Usuário criado com sucesso",
          content: {
            "application/json": {
              example: {
                id_usuario: 1,
                nome: "João Silva",
                email: "joao@email.com",
                telefone: "11999999999",
                foto_perfil: "https://link.com/foto.jpg",
                data_cadastro: "2025-06-12",
                ativo: true
              }
            }
          }
        },
        500: {
          description: "Erro ao criar usuário"
        }
      }
    },
    get: {
      tags: ["Usuarios"],
      summary: "Lista todos os usuários",
      responses: {
        200: {
          description: "Lista de usuários",
          content: {
            "application/json": {
              example: [
                {
                  id_usuario: 1,
                  nome: "João Silva",
                  email: "joao@email.com",
                  telefone: "11999999999"
                }
              ]
            }
          }
        }
      }
    }
  },

  "/usuarios/login": {
    post: {
      tags: ["Usuarios"],
      summary: "Realiza login de usuário",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              email: "joao@email.com",
              senha: "senha123"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Login realizado com sucesso",
          content: {
            "application/json": {
              example: {
                message: "Login realizado com sucesso",
                token: "jwt_token_aqui",
                nome: "João Silva",
                id_usuario: 1
              }
            }
          }
        },
        401: {
          description: "Email ou senha inválidos"
        }
      }
    }
  },

  "/usuarios/{id}": {
    put: {
      tags: ["Usuarios"],
      summary: "Atualiza dados de um usuário pelo ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      requestBody: {
        content: {
          "application/json": {
            example: {
              nome: "João Atualizado",
              email: "joao_novo@email.com",
              senha: "novaSenha123",
              telefone: "11888888888",
              perfil_usuario: "cliente",
              data_cadastro: "2025-06-12"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Usuário atualizado com sucesso"
        },
        404: {
          description: "Usuário não encontrado"
        }
      }
    },
    delete: {
      tags: ["Usuarios"],
      summary: "Desativa um usuário pelo ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "integer"
          }
        }
      ],
      responses: {
        200: {
          description: "Usuário deletado com sucesso"
        }
      }
    }
  },

      }
    }

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
});

export default swaggerSpec;