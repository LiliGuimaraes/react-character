import React from 'react';
import './CharacterList'
import Character from './Character/Character'
export default function CharacterList(){
    return(
        <>
        <span className='char-title'>Personagens</span>
        <ul className='char-list'>
            <div className='cahr-item'>
                <Character />
            </div>
        </ul>
        </>
    )
}