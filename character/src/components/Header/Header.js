
import React from 'react';
import './Header'
export default function Header(){
    return(
        <div className="head-container">
            <img src='assets/breaking_bad_logo.png' alt='Breaking Bad' className='title'></img>
            <form className='search-container'>
                <input type='text' id='search-point'/>
                <label htmlFor='search-input' className='search-bar'>Pesquisar</label>
                <button className='search-btn'>P</button>
            </form>
        </div>
    );
}