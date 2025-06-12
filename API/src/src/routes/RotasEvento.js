import { BD } from "../../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class RotasEventos {
  // POST - Cadastrar evento
  static async cadastrar(req, res) {
    const { nome, descricao, data_inscricao, tipo, status, link_pagamento } = req.body;

    try {
      const resultado = await BD.query(
        `INSERT INTO public.eventos (nome, descricao, data_inscricao, tipo, status, link_pagamento)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [nome, descricao, data_inscricao, tipo, status, link_pagamento]
      );

      res.status(200).json({ message: "Evento cadastrado com sucesso!" });
    } catch (error) {
      console.error("Erro ao cadastrar o evento:", error);
      res.status(500).json({
        message: "Erro ao cadastrar o evento.",
        error: error.message,
      });
    }
  }

  // GET - Buscar todos os eventos
  static async buscarTodos(req, res) {
    try {
      const resultado = await BD.query(`SELECT * FROM public.eventos`);
      res.status(200).json(resultado.rows);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      res.status(500).json({
        message: "Erro ao buscar eventos.",
        error: error.message,
      });
    }
  }

  // GET - Buscar evento por ID
  static async buscarPorId(req, res) {
    const { id } = req.params;

    try {
      const resultado = await BD.query(
        `SELECT * FROM public.eventos WHERE id_evento = $1`,
        [id]
      );

      if (resultado.rowCount === 0) {
        return res.status(404).json({ message: "Evento não encontrado." });
      }

      res.status(200).json(resultado.rows[0]);
    } catch (error) {
      console.error("Erro ao buscar evento:", error);
      res.status(500).json({
        message: "Erro ao buscar evento.",
        error: error.message,
      });
    }
  }

  // PUT - Atualizar todos os campos
  static async atualizarTodosCampos(req, res) {
    const { id } = req.params;
    const { nome, descricao, data_inscricao, tipo, status, link_pagamento } = req.body;

    try {
      const resultado = await BD.query(
        `UPDATE public.eventos
         SET nome = $1, descricao = $2, data_inscricao = $3, tipo = $4, status = $5, link_pagamento = $6
         WHERE id_evento = $7`,
        [nome, descricao, data_inscricao, tipo, status, link_pagamento, id]
      );

      if (resultado.rowCount === 0) {
        return res.status(404).json({ message: "Evento não encontrado." });
      }

      res.status(200).json({ message: "Evento atualizado com sucesso!" });
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      res.status(500).json({
        message: "Erro ao atualizar evento.",
        error: error.message,
      });
    }
  }

  // PATCH - Atualizar campos específicos (refatorado)
  static async atualizar(req, res) {
    const { id } = req.params;
    const { nome, descricao, data_inscricao, tipo, status, link_pagamento } = req.body;

    const dados = { nome, descricao, data_inscricao, tipo, status, link_pagamento };
    const campos = [];
    const valores = [];
    let i = 1;

    for (const [chave, valor] of Object.entries(dados)) {
      if (valor !== undefined) {
        campos.push(`${chave} = $${i++}`);
        valores.push(valor);
      }
    }

    if (campos.length === 0) {
      return res.status(400).json({ message: "Nenhum campo para atualizar." });
    }

    const query = `UPDATE public.eventos SET ${campos.join(', ')} WHERE id_evento = $${i}`;
    valores.push(id);

    try {
      const resultado = await BD.query(query, valores);

      if (resultado.rowCount === 0) {
        return res.status(404).json({ message: "Evento não encontrado." });
      }

      res.status(200).json({ message: "Evento atualizado com sucesso!" });
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      res.status(500).json({
        message: "Erro ao atualizar evento.",
        error: error.message,
      });
    }
  }

  // DELETE - Deletar evento
  static async deletar(req, res) {
    const { id } = req.params;

    try {
      const resultado = await BD.query(
        `DELETE FROM public.eventos WHERE id_evento = $1`,
        [id]
      );

      if (resultado.rowCount === 0) {
        return res.status(404).json({ message: "Evento não encontrado." });
      }

      res.status(200).json({ message: "Evento deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
      res.status(500).json({
        message: "Erro ao deletar evento.",
        error: error.message,
      });
    }
  }
}

export default RotasEventos;
