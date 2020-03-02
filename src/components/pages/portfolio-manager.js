import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    }

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSumbissionError = this.handleFormSumbissionError.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    // ToDo
    // Update the portfolioItems state
    // And add the portfolioItems to the list
  }

  handleFormSumbissionError(error) {
    console.log("handleFormSubbmissionError error", error)
  }

  getPortfolioItems() {
    axios.get("https://jadenhendrickson.devcamp.space/portfolio/portfolio_items", { 
      withCredentials: true 
    })
    .then(response => {
      this.setState({
        portfolioItems: [...response.data.portfolio_items]
      });
    })
    .catch(error => {
      console.log('error in getPortfolioItems', error);
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm 
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSumbissionError={this.handleFormSumbissionError}
          />
        </div> 

        <div className="right-colum">
            <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div> 
      </div> 
    );
  }
}