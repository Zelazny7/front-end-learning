import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

// our application state is created by these reducers
// application state is generated by reducer functions
// combineReducers adds a key to the global state object

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
