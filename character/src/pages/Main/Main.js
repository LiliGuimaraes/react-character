import React from 'react';
import './Main.css'
import Header from '../../components/Header/Header'
import Paginator from '../../components/Paginator/Paginator';
import CharacterList from '../../components/CharacterList/CharacterList';

export default function PageMain(){
    return(
        <div className='page'>
            <Header />
            <CharacterList />
            <Paginator />
        </div>
    )
}

