
import {Route, Routes} from 'react-router-dom';

import {Home} from './pages/home';
import {Register} from './pages/register';
import {View} from './pages/view';


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/view" element={<View/>}/>
        </Routes>
    )
 }