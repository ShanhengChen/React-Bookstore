import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { editBook, setShowEditBookPage } from '../store/booksSlice.ts';

function EditBookPage({ book }) {
  const [bookDetails, setBookDetails] = useState(book);
  const dispatch = useDispatch();
  
  const editBookIndex = useSelector(state => state.books.editBookIndex);

  useEffect(() => {
    setBookDetails(book);
  }, [book]);

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editBook({ index: editBookIndex, book: bookDetails })); 
    dispatch(setShowEditBookPage(false));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => dispatch(setShowEditBookPage(false))}>&times;</span>
        <h2>Edit Book Details</h2>
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
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default EditBookPage;
