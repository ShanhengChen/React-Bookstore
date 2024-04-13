import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, setShowAddBookPage } from '../store/booksSlice.ts';

function AddBookPage() {
  const [bookDetails, setBookDetails] = useState({ name: '', price: '', category: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(bookDetails));
    dispatch(setShowAddBookPage(false));
    setBookDetails({ name: '', price: '', category: '', description: '' }); // Reset form
  };

  return (
    <div className="add-book-page">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={bookDetails.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={bookDetails.price} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={bookDetails.category} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={bookDetails.description} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBookPage;