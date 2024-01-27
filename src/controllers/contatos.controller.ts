import { Request, Response } from 'express';
import { UsuariosContatos } from '../models/Usuarios-Contatos';


export const all = async (req: Request, res:Response) => {
    const contatos = await UsuariosContatos.findAll();
    res.json({contatos});
}

export const add = async (req: Request, res:Response) => {
    if(req.body.nome && req.body.email && req.body.telefone) {
        let newcontatos = await UsuariosContatos.create({
           nome: req.body.nome,
           email: req.body.email,
           telefone: req.body.telefone
        })
        res.status(201).json({item: newcontatos});
    }

    res.json({ error: 'Dados não enviados'})
}


export const update = async (req: Request, res:Response) => {
    const id: string = req.params.id;

    let contatos = await UsuariosContatos.findByPk(id);

    if(contatos) {
       await contatos.save();
       res.json({item:contatos});

    }else {
       res.json({error: 'Item não encontrado!'});
    }
}

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