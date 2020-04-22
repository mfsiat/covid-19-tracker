import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlbd = "https://covid19.mathdro.id/api/countries/bangladesh";

// fetches the main data 
export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};


// fetches daily data for the chart
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch(error) {
    console.log(error);
  }
}


// fetcehs data for country picker 
export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch(error) {
    console.log(error);
  }
}
