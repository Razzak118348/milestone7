import CountryData from "../CountryData/CountryData";

const CountryDetails = ({singlecountry,handleVisitedCountry,handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
        <CountryData
        singlecountry={singlecountry}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        ></CountryData>
        </div>
    );
};

export default CountryDetails;