
import { useState } from 'react';
import * as C from './style';


type Prop = {
    captureWord: (word: string) => void;
}
export const Search = ({captureWord}:Prop) => {

    const [inputValue, setInputValue] = useState<string>('');
    captureWord(inputValue);

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