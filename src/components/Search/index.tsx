
import { useState } from 'react';
import * as C from './style';
export const Search = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <C.Container>
            <input value={inputValue} onChange={handleInputChange} type="text" placeholder='Search Contact'/>
            <button>Search</button>
        </C.Container>
    )
   
}