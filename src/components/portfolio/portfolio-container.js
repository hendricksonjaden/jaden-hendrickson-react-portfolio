import React, { Component } from 'react'; 

import PortfolioItem from "./portfolio-item";

export default class portfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
      {title: "Upper Case Printing"},
      {title: "Freedom Mailing Services"},
      {title: "Point Pest Control"},
      {title: "DOMO"}
      ]
    };

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else"
    });
  }

  render () {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}

        <hr/>

        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}