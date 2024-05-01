
import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetail/CountryDetails';

const Country = ({singlecountry,handleVisitedCountry,handleVisitedFlags}) => {
    

    const {name,flags,population,area,cca3
    }=singlecountry;
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited);// when visited is true then setVisited(false) and when visited is false then setVisited(true)
    }

   
    return (
        <div className={`design ${visited ? 'visited':'non-visited'}`}>
            {/* //visited && 'visited' */}
            <h3 style={{color:visited ? 'green':'white'}}>Name : {name.common}</h3>
            <img src={ flags.png} alt="" />
    <p style={{color:visited ? 'green':'white'}}>Population : {population
}</p>
<p style={{color:visited ? 'green':'white'}}>Area : {area}</p>
    <p style={{color:visited ? 'green':'white'}}><small>code : {cca3}</small></p>
    <button onClick={()=>  handleVisitedCountry(singlecountry)}>Mark visited</button><br />
    <button onClick={()=>handleVisitedFlags(singlecountry.flags.png)}>Show Flag</button>
    <br />
  
    <button onClick={handleVisited}>{ visited?"Visited":'Going'}</button> 
    {visited?  ' I have visited this country':' I want to visite this country'}
 
<hr />
<CountryDetails
singlecountry={singlecountry}
handleVisitedCountry={handleVisitedCountry}
handleVisitedFlags={handleVisitedFlags}

>

</CountryDetails>

        </div>
    );
};

export default Country;