//Context, reducer, provider, hook
import { createContext, useState, ReactNode, useContext, useReducer } from "react";

//Types

type State = {
    loading:boolean; 
}

type Data = {
    name: string,
    phone: string,
    email: string
}


type Action = {
    type:UserContactAction;
    payload: any;
}

type ApiService = {
    get: () => Promise<void>;
}

type ContextType = {
    data: Data;
    state: State;
    ApiService:ApiService;
    dispatch: (action:Action) => void
}

type UseContactProviderProps = {
    children: ReactNode;
}

//context
const UseContactContext = createContext<ContextType | undefined >(undefined);


//DADOS INITICIAIS REQUISIÇÃO
const initialResponse: Data = {
    name: '',
    phone: '',
    email: ''
}

//Dados ininiciais do state

const initialData: State = {
    loading: false
}


//Reducer

export enum UserContactAction {
    setLoading,
}



const useGitReducer = (state:State, action:Action) => {
    switch(action.type) {
            
        case UserContactAction.setLoading:
            return {...state, loading: action.payload}; 

        default:
            return state;
    }
}


//Provider

export const UseContactProvider  = ({children}:UseContactProviderProps) => {
        const [state, dispatch ] = useReducer(useGitReducer, initialData);
        const [data, setData] = useState<Data>(initialResponse);

        const updateLoadding = (loadding:boolean) => {
            dispatch({
                type: UserContactAction.setLoading,
                payload: loadding
            });
        }

        const API_BASE = 'https://api.github.com';

        const ApiService = {
            get: async () => {
              try {
                updateLoadding(true);
                const response = await fetch(`${API_BASE}/users/HugoSouza10`);
          
                if (!response.ok) {
                  throw new Error('Erro ao buscar usuário');
                }
          
                const data = await response.json();
                setData(data);
              } catch (error) {
                console.error(error);
                alert('Erro ao buscar usuário');
              } finally {
                updateLoadding(false);
              }
            }
          }
         

          console.log(data)
        
        const value = {state, dispatch, data, ApiService};

        return (
            <UseContactContext.Provider value={value}>
                {children}
            </UseContactContext.Provider>
        )
}



//Context Hook

export const useContactContext = () => {
    const context = useContext(UseContactContext);

    if(context === undefined) {
        throw new Error('useGit precisa ser usado dentro do UseContactProvider');
    }

    return context;
}