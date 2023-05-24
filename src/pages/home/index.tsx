import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { CardContact } from '../../components/CardContact';
import * as C from './style';
import { useContactContext } from '../../contexts/contactContext';


export const Home = () => {
    const {data} = useContactContext();

    return (
        <>
            <Header/>
            <C.Container>
                <C.ContainerNew>
                    <h1>Phone Directory</h1>
                    <div className='btn-new'><span className='btn-icone'>Icone</span>New</div>
                </C.ContainerNew>
                <p>jnsnsjdjnsjdnsjndjnsdjnsjndsd bfbhdbfdbfdb sjnssndn ksnknskd</p>
                <Search/>
                <C.ContainerCard>
                    <CardContact/>
                    <CardContact/>
                    <CardContact/>
                    <CardContact/>
                </C.ContainerCard>
                
            </C.Container>
        </>
        
       
    )
}