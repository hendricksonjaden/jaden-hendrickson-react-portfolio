import React, { Component } from 'react'; 

import PortfolioItem from "./portfolio-item";

export default class portfolioContainer extends Component {
  constructor() {
    super();

    console.log("Portfolio container has rendered");
  }

  portfolioItems() {
    const data = ["Upper Case Printing", "Freedom Mailing Services", "Point", "DOMO"];

    return data.map(item => {
      return <PortfolioItem />
    })
  }

  render () {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}