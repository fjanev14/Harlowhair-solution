import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.post('http://localhost:50239/Bookmark/deleteBookmark/'+this.props.obj.ID)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.ShortDescription}
          </td>
          <td>
            {this.props.obj.URL}
          </td>
          <td>
            {this.props.obj.CategoryId}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.ID} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;