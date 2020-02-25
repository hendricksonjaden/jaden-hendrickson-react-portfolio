import React, { Component } from 'react'; 

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
      {title: "Upper Case Printing", category: "eCommerce", slug: "Upper-Case-Printing" },
      {title: "Freedom Mailing Services", category: "Scheduling", slug: "Freedom-Mailing-Services" },
      {title: "Point", category: "Enterprise", slug: "Point" },
      {title: "DOMO", category: "eCommerce", slug: "DOMO" }
      ]
    };
  
      this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
    });
  }

  render () {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('eCommerce')}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter('Scheduling')}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter('Enterprise')}>
          Enterprise
        </button>

        {this.portfolioItems()}

      </div>
    ); 
  }
}









