import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onURL = this.onURL.bind(this);
    this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
    this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      url: '',
      shortDescription: '',
      categoryId:''
    }
  }
  onURL(e) {
    this.setState({
      url: e.target.value
    });
  }
  onChangeShortDescription(e) {
    this.setState({
      shortDescription: e.target.value
    })  
  }
  onChangeCategoryId(e) {
    this.setState({
      categoryId: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      url: this.state.url,
      shortDescription: this.state.shortDescription,
      categoryId: this.state.categoryId
    };
    axios.post('http://localhost:50239/Bookmark/createBookmark', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      url: '',
      shortDescription: '',
      CategoryId: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Bookmark</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>URL:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.url}
                      onChange={this.onURL}
                      />
                </div>
                <div className="form-group">
                    <label>Short Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.shortDescription}
                      onChange={this.onChangeShortDescription}
                      />
                </div>
                <div className="form-group">
                    <label>Category Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.categoryId}
                      onChange={this.onChangeCategoryId}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Register Bookmark" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}