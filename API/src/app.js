import express from 'express';
import cors from 'cors';
import { testarConexao } from '../../db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './Swagger.js';


// Importações de rotas
import RotasUsuarios, {autenticarToken} from './src/routes/RotasUsuarios.js';
import RotasEventos from './src/routes/RotasEvento.js';


const app = express();
testarConexao();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

 app.get('/', (req, res) => {
    res.redirect("/api-docs");
});


// Rotas de Usuários
app.post('/usuarios', RotasUsuarios.novoUsuario);
app.get('/usuarios', RotasUsuarios.listarUsuario);
app.put('/usuarios/:id',  RotasUsuarios.atualizarUsuario);
app.delete('/usuarios/:id',  RotasUsuarios.deletarUsuario);
app.post('/usuarios/login', RotasUsuarios.login);
app.patch('/usuarios/:id',  RotasUsuarios.editar);
app.get('/usuarios/filtrarUsuario', RotasUsuarios.filtrarUsuario);


//Rotas de Eventos
 app.post('/eventos', RotasEventos.cadastrar);


const porta = 3000;
app.listen(porta, () => {
    console.log(`API rodando em: http://localhost:${porta}`);
});

