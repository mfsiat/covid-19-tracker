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
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    // destructuring the this.data 
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default app;
