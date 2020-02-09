import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  values;
  constructor(props) {
        super(props);
        this.clickBookmark = this.clickBookmark.bind(this);
    this.values=props;
    }
    
    clickBookmark() {
      const obj={
        userId: this.values.obj.UserId,
        bookmarkId: this.values.obj.BookmarkId
      }
        axios.post('http://localhost:50239/UserBookmark/clickedBookmark',obj)
            .then(console.log('Clicked'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.BookmarkName}
          </td>
          <td>
            {this.props.obj.BookmarkUrl}
          </td>
          <td>
            {this.props.obj.CategoryName}
          </td>
          <td>
            {this.props.obj.NumberOfClicks}
          </td>
          <td>
            <button onClick={this.clickBookmark} className="btn btn-danger">Click bookmark</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;