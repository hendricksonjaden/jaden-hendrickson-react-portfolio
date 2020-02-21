import React, { Component } from 'react'; 
import PortfolioItem from "./portfolio-item";

export default class portfolioContainer extends Component {
  render () {
    return (
      <div className='portfolioContainer'>
        <h2>Portfolio items go here...</h2>

        <PortfolioItem />
      </div>
    );
  }
}