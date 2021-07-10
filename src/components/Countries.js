import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data,setData] = useState([]);
    const [tryData, setTryData] = useState([]);
    //probleme c'est que en asynchrone il n'a pas le temps de lire la data qu'il faut qu'il trie alors:
    // et comme il y a un useEffect il relance la data alors
    // joue une sul fois la data
    const [playOnce, setPlayOne] = useState(true);
    const [rangeValue, setRangeValue] = useState(50);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radio = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']; 
useEffect( ()=> {
    if(playOnce) {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;population;region;capital;flag')
        .then((res) => {
            setData(res.data)
            setPlayOne(false);
        });
    
    }
    const tryPopulation = () => {
        //transforme la data en objet / jason=>objet = jason.parse() and objet=>jason = jason.stringify()
        const countryObj = Object.keys(data).map((i)=> data[i])
        const sortedArray = countryObj.sort((a,b)=>{
            return b.population - a.population;
    });
    console.log(sortedArray);
    sortedArray.length = rangeValue;
    setTryData(sortedArray);
};
tryPopulation();    
},[data,rangeValue,playOnce]);


return(
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/> 
                <ul>
                    {radio.map((radio) =>{
                        return(
                            <li key={radio}>
                                <input type="radio" value={radio} id="radio" checked={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)} />
                                
                                <label htmlFor= {radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={()=> setSelectedRadio("")} >cancel radio</h5>}
            </div>
            <ul className="countries-list">
                {tryData
                .filter((country) => country.region.includes(selectedRadio))
                .map((country)=> (
                <Card country = {country} key={country.name} />
                ))}
            </ul>
        </div>
    )
//fin de countries-----------------------------------------------------
};

export default Countries;