import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config()


const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_beach',
    password: 'admin',
    port: 5432,
})

const testarConexao = async () =>{
    try{
        const client = await BD.connect();//tenta estabelecer a conexao com o banco de dados
        console.log("✔ Conexao com o banco de dados estabelecida");
        client.release(); // libera o client
    }catch(error)
    {
        console.error("Erro ao conectar ao banco de dados", error.message)
    }
}


export { BD, testarConexao};