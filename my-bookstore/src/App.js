import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './components/BookList';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';
import { setShowAddBookPage, setEditBookIndex,  setShowEditBookPage} from './store/booksSlice.ts';

function App() {
  const { books, showBookList, showAddBookPage, showEditBookPage, editBookIndex } = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleAddBookClick = () => {
    dispatch(setShowAddBookPage(true));
  };

  const handleBookClick = (index) => {
    dispatch(setEditBookIndex(index));
    dispatch(setShowEditBookPage(true));
  };

  return (
    <div className="container">
      <header>
        <h1>Bookstore</h1>
      </header>
      <main>
        {!showAddBookPage && !showEditBookPage && (
          <button className="add-book-button" onClick={handleAddBookClick}>Add Book</button>
        )}
        <div className="book-list-container">
          {showBookList && <BookList className="book-list" books={books} onBookClick={handleBookClick} />}
        </div>
        {showAddBookPage && <AddBookPage />}
        {showEditBookPage && <EditBookPage book={books[editBookIndex]} />}
      </main>
    </div>
  );
  
  
}

export default App;