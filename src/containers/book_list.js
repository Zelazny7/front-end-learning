import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // makes sure actions flow throw all reducers

// containers are smart components -- comps with state managed by redux

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        // add a click event handler here
        <li
          key={book.title}
          onClick={() => this.props.selectBook( book ) }
          className="list-group-item">
            {book.title}
          </li>
      );
    });
  }

  // a container is a react component with a direct connection to redux
  // the connection is made outside of the class definition by wiring
  // a component to a function that maps global state to the component state
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

// Anything returned from this function will end up as props on the bookLst container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result should be passed to all of our reducers
  // That's what bindActionCreators is doing here with dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote booklist from a component to a container
// it needs to know about this dispatch method, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
