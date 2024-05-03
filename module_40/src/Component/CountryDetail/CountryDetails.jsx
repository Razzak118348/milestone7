import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const {singlecountry,handleVisitedCountry,handleVisitedFlags}=props;

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
        {/* <CountryData
        singlecountry={singlecountry}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
        ></CountryData> */}
        <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;