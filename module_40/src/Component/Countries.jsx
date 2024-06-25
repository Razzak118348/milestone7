import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countris.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag,setVisitedFlag]=useState([]);//onek golo country info rakhbo tai empty string useState er modde dite hobe

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (SelectCountry) => {
    console.log("add this to your visited country");
    console.log(SelectCountry);
    // visitedCountries.push(SelectCountry)//this is not right way and do not change the value in this way.
    const newVisitedCountries =[...visitedCountries,SelectCountry];//visitedCountries full copy hobe ar selectCountry add hoiya jabe .. 
    //this is a react special fact;new array banate hobe tarpor add korte hobe..
    setVisitedCountries(newVisitedCountries);
   
  
  };

  const handleVisitedFlags=(flag)=>{
    console.log('flag adding');
    const newVisitedFlags=[...visitedFlag,flag]//see React document -> Updating Objects in State.
    setVisitedFlag(newVisitedFlags)
  }

//remove item from an array in a state 
//use filter to select all the elements except the one you want to remove  


  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      {/* visited countries */}
      <div>
        <h5>Visited contries : {visitedCountries.length}</h5>
       
        <ul style={{textAlign:"left"}}> 
          {
              visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
             
          }
        </ul>
      </div>

      {/* display countries  */}

          <div >
          {//map has contian 3 parameter 1.value,2.index,3.full array  ->>>>>>array.map(function(currentValue, index, arr), thisValue)
            visitedFlag.map((flag,idx) =>  <img className="flag-container" key={idx} src={flag} alt="" /> )
          }
          </div>

      <div className="countries">
        {
          countries.map((country) => (
            <Country
              key={country.cca3}
              singlecountry={country}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlags={handleVisitedFlags}
              
          
            ></Country>
          )) //here singlecountry={country} is the props ..the singlecountry is prop name and {country} is value
        }
      </div>
    </div>
  );
};

export default Countries;
