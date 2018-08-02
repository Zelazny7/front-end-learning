import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  // a container is a react component with a direct connection to redux
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of book list

  // whatever we return here will show up as props in the BookList instance
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
