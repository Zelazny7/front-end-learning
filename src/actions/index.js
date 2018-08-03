export function selectBook(book) {
  // console.log('a book has been selected:', book.title);
  // selectBook is an action creator. it needs to return an action.
  // -- an object with a type property.
  // actions have two values: a type and a payload. every action must have a
  // type that describes the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}
