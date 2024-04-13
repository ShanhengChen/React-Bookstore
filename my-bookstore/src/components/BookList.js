import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, setEditBookIndex, setShowEditBookPage } from '../store/booksSlice.ts';

function BookList({ books }) {
  const dispatch = useDispatch();

  const handleBookClick = (index) => {
    dispatch(setEditBookIndex(index));
    dispatch(setShowEditBookPage(true));
  };

  const handleDeleteBook = (index, e) => {
    e.stopPropagation();
    dispatch(deleteBook(index));
  };

  return (
    <div>
      <h2>Book List</h2>  
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item" onClick={() => handleBookClick(index)}>
            <div className="book-info">
              <p>
                Name: {book.name} Price: {book.price} Category: {book.category}
              </p>
            </div>
            <div className="button-container">
              <button onClick={(e) => handleDeleteBook(index, e)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
}

export default BookList;