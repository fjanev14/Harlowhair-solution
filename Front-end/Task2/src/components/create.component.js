import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeBookmarkId = this.onChangeBookmarkId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userId: '',
      bookmarkId: ''
    }
  }
  onChangeUserId(e) {
    this.setState({
      userId: e.target.value
    });
  }
  onChangeBookmarkId(e) {
    this.setState({
      bookmarkId: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      userId: this.state.userId,
      bookmarkId: this.state.bookmarkId
    };
    axios.post('http://localhost:50239/UserBookmark/addUserBookmark', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      userId: '',
      bookmarkId: '',
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Save bookmark</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>User Id:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.userId}
                      onChange={this.onChangeUserId}
                      />
                </div>
                <div className="form-group">
                    <label>Bookmark Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.bookmarkId}
                      onChange={this.onChangeBookmarkId}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Save bookmark" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}