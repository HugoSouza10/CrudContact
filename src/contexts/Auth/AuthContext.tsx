import { createContext } from 'react';
import { ContactType } from '../../types';

export type AuthContextType = {
    user: ContactType | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);