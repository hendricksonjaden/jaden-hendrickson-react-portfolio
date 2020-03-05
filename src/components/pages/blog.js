import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: []
    }

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios.get("https://jadenhendrickson.devcamp.space/portfolio/portfolio_blogs", 
    { withCredentials: true 
  })
  .then(response => {
    console.log(response)
    this.setState({
      blogItems: response.data.portfolio_blogs
    })
  })
  .catch(error => {
    console.log("getBlogItems error", error)
  })
}

// React v17 and above calls this unsafe.
// https://reactjs.org/docs/react-component.html#unsafe_componentwillmount 
componentWillMount() {
  this.getBlogItems()
}

render() {
  const blogRecords = this.state.blogItems.map(blogItem => {
    return <h1 key={blogItem.id}>{blogItem.title}</h1>;
  })

  return (
    <div>
      {blogRecords}
    </div>
    );
  }
}