import React from "react";

const Card = (props) => {
    const { country } = props;
  
    const numberFormat = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };
  
    return (
      <li className="card">
        <img src={country.flag} alt="flag" />
        <div className="data-container">
          <ul>
            <li>{country.name}</li>
            <li>cap : {country.capital}</li>
            <li>pop : {numberFormat(country.population)}</li>
            {/* <li>code: {country.alpha3Code} </li> */}
           
          </ul>
        </div>
      </li>
    );
  };
  

export default Card;