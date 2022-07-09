import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Residents from './Residents';


const Rick = () => {
const [ rick, setRick ] = useState({})
const [ search, setSearch ] = useState("")
useEffect(()=>{
    const ramdom= Math.floor(Math.random() * 126) + 1;
    axios.get((`https://rickandmortyapi.com/api/location/${ramdom}`))
    .then(res => setRick(res.data));

}, [])
const searching = () =>{
    axios.get((`https://rickandmortyapi.com/api/location/${search}`))
    .then(res => setRick(res.data)); 
}

const handleKeyDown = event => {
    console.log('User pressed: ', event.key);
    if (event.key === 'Enter') {
      
      console.log('Enter key pressed');
      searching();
    }
  };

console.log(rick.residents?.length)
    return (
        <div>
            <div className='comand'>
            <label className='label'>Search Location: </label>
            <input  type='number' onChange={e =>setSearch(e.target.value)} onKeyDown={handleKeyDown}value={search}/>
            <button className='btn'onClick={searching}>SEARCH</button>
            </div>
            <h1 className='title'>Location: {rick.name}</h1>
            <p className='data border'>Type: <span>{rick.type}</span></p>
            <p className='data border'>Dimension: <span>{rick.dimension}</span></p>
            <p className='data border'>Population: <span>{rick.residents?.length}</span> </p>
            <div className={`${rick.residents?.length === 0 ? "people" : "hidden"}`}>No hay habitantes en esta dimension</div>
            <div className='container'>
                {rick.residents?.map(resident =>(
                    <Residents key={resident} resident={resident}/>
                    
                ))}
            </div>

        </div>
    );
};

export default Rick;