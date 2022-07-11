import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import ResidentInfo from './ResidentInfo';


const Rick = () => {
const [ rick, setRick ] = useState({})
const [ search, setSearch ] = useState("")
const [ msg,  setMsg ] = useState("")
useEffect(()=>{
    const ramdom= Math.floor(Math.random() * 126) + 1;
    axios.get((`https://rickandmortyapi.com/api/location/${ramdom}`))
    .then(res => setRick(res.data));

}, [])
const searching = () =>{
    axios.get((`https://rickandmortyapi.com/api/location/${search}`))
    .then(res => setRick(res.data)); 
    minMax();
}

const minMax = () =>{
    if (search >= 127){
setMsg("This number of dimension it's not avaible for now, try another number between 1 to 126")
return msg;
    } else{
        setMsg("")
    }
}
const handleKeyDown = event => {
    if (event.key === 'Enter') { 
      searching();
      minMax();
    }
  };


    return (
        <div>
            <div className='comand'>
            <label className='label'>Search Location: </label>
            <input placeholder='ENTER 1 - 126'  type='number' onChange={e =>setSearch(e.target.value)} onKeyDown={handleKeyDown} value={search}/>
            <button className='btn'onClick={searching}>SEARCH</button>
             <div className='notAvailble'>{msg}</div>
            </div>
            <h1 className='title'>Location: {rick.name}</h1>
            <p className='data border'>Type: <span>{rick.type}</span></p>
            <p className='data border'>Dimension: <span>{rick.dimension}</span></p>
            <p className='data border'>Population: <span>{rick.residents?.length}</span> </p>
            <div className={`${rick.residents?.length === 0 ? "people" : "hidden"}`}>No one lives in this dimension</div>
            <div className='container'>
                {rick.residents?.map(resident =>(
                    <ResidentInfo key={resident} resident={resident}/>
                    
                ))}
            </div>
            <footer>
            <p>Author: James Hernandez G</p>
            </footer>
        </div>
       
    );
};

export default Rick;