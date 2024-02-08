import { Request, Response } from 'express';
import { UsuariosContatos } from '../models/Usuarios-Contatos';


export const all = async (req: Request, res:Response) => {
    const contatos = await UsuariosContatos.findAll();
    res.json({contatos});
}

export const add = async (req: Request, res:Response) => {
    console.log(req.body)
    if(req.body.nome && req.body.email && req.body.telefone) {
        let newcontatos = await UsuariosContatos.create({
           nome: req.body.nome,
           email: req.body.email,
           telefone: req.body.telefone
        })
        res.status(201).json({item: newcontatos});
    }
}


export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
      let contato = await UsuariosContatos.findByPk(id);
  
      if (contato) {
        // Atualiza os campos com base nos dados enviados na requisição
        await contato.update({
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone,
        });
  
        // Retorna os dados atualizados
        res.json({ item: contato });
      } else {
        res.status(404).json({ error: 'Item não encontrado!' });
      }
    } catch (error) {
      console.error('Erro ao atualizar contato:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao atualizar contato.' });
    }
  };

export const remove = async (req: Request, res:Response) => {
    const id: string = req.params.id;

    let contatos = await UsuariosContatos.findByPk(id);

    if(contatos) {
        await UsuariosContatos.destroy({
            where: {
                id: id
            }
        });
    }

    res.json({});
}