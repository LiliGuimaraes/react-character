import React from 'react';
import Character from '../CharacterList/Character/Character';
import './SearchList'
export default function SearchList(){
    return(
        <>
        <span className='char-title'>Personagens</span>
        <ul className='char-list'>
            <div className='class-item'>
                <Character />
            </div>
        </ul>
        </>
    )
}