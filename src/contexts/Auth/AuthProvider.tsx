import { useEffect, useState } from "react";
import { api } from "../../api";
import { ContactType } from "../../types";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<ContactType | null>(null);
    

    //Esse código vai vigiar a api, toda vez que alguém usa-la, vamos rodar o validateToken
    useEffect(() => {
        const validateToken = async () => {
            //Estou lendo o que armazenei no local store
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.contatos) {
                    setUser(data.contatos);
                }
            }
        }
        validateToken();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api]);

    //Faz login
    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.contatos && data.token) {
            setUser(data.contatos);
            setToken(data.token);
            return true;
        }
        return false;
    }

    //Vai destruir o user e o token daquele usuário
    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
    }

    //Armazenar o token do usuario logado!
    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );

    //Provider serve para disponibilizar o context para os componentes
}
