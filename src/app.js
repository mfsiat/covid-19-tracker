// class based component
import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import image from './images/image.png';
class app extends React.Component {
  // setting a state to display the data on the cards component
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  // for country picker
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country); 
    // fetch the data 
    // set the state 
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    // destructuring the this.data 
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default app;
