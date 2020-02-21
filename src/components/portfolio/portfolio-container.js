import React, { Component } from 'react'; 
import PortfolioItem from "./portfolio-item";

export default class portfolioContainer extends Component {
  constructor() {
    super();
  }
  render () {
    console.log("Portfolio container has rendered");
    return (
      <div className='portfolioContainer'>
        <h2>Portfolio items go here...</h2>

        <PortfolioItem />
      </div>
    );
  }
}