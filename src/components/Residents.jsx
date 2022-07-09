import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const Residents = ({resident}) => {
    const [ url, setUrl ] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(resident)
        .then(res => setUrl(res.data))
        .finally(() => setLoading(false));
    },[])

console.log(loading);
    return (
        <div className='item'>
            {loading ? (
                <div className='loading'></div>
            ) : (
                <>
            <div className='card'>
                <div className='char-name'>Name: {url.name}</div>
                <div><img className='imgC' src={url.image}/></div>
                <div className={`${url.status === "Alive" ? "alive" : "dead"}`}>Status: {url.status}</div>
                <div className='text'>Lugar: {url.origin?.name}</div>
                <div className='text'>Episiodios donde aparece: {url.episode?.length}</div>
                </div>
        </>)}
        
        </div>
       
    );
};

export default Residents;