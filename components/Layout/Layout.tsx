import {ReactNode, useState} from 'react';
import Burger from '../Burger/Burger';
import Header from '../Header/Header';
import s from './Layout.module.scss'



export default function Layout({ children }:{children: ReactNode}) {
    const [isClosed, setIsClosed] = useState(true)

    return (
            <main className={s.App} style={{display:'flex'}}>
                <Header isClosed={isClosed} callback={setIsClosed}/>
                <Burger callback={setIsClosed}/>
                {children}
            </main>
    );
}