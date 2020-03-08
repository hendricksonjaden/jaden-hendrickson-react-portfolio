import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalisOpen: false
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false)
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalClose() {
    this.setState({
      blogModalisOpen: false
    })
  }

  handleNewBlogClick() {
    this.setState({
      blogModalisOpen: true
    })
  }

  onScroll() {
    if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
      return
    }

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems();
    }
  };
  
  getBlogItems() {
    this.setState ({
      currentPage: this.state.currentPage + 1
    })

    axios
      .get
        (`https://jadenhendrickson.devcamp.space/portfolio/portfolio_blogs?page=${this
          .state.currentPage}`, 
        { withCredentials: true
        })
      .then(response => {
        console.log("getting", response)
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false
        });
      })
      .catch(error => {
        console.log("getBlogItems error", error);
      });
  }


  // React v17 and above calls this unsafe.
  // https://reactjs.org/docs/react-component.html#unsafe_componentwillmount 
  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });

    return (
      <div className="blog-container">
      <BlogModal 
        handleModalClose={this.handleModalClose}
        modalIsOpen={this.state.blogModalisOpen} 
      />

      <div className="new-blog-link">
        <a onClick={this.handleNewBlogClick}>
          Open My Modal!
        </a>
      </div>

        <div className="content-container">
          {blogRecords}
        </div>

        {this.state.isLoading ? ( 
        <div className="content-loader">
          <FontAwesomeIcon icon="spinner" spin/>
        </div>
        ) : ( 
          null 
        )} 
      </div>
    );
  }
}

export default Blog;

