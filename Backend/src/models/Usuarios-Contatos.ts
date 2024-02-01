
import {Model, DataTypes} from "sequelize";
import { sequelize } from "../instances/mysql";


export interface ContatosInstance extends Model {
    id: number;
    nome: string;
    email: string;
    telefone: string;
}

export const UsuariosContatos = sequelize.define<ContatosInstance>('UsuariosContatos',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },

    telefone: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'contatos',
    timestamps: false
});