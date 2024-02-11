
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/home';
import {Login} from './pages/login';
import { RequireAuth } from './contexts/Auth/RequireAuth';

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
 }