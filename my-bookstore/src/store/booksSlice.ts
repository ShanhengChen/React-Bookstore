import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BooksState {
  books: Book[];
  showBookList: boolean;
  showAddBookPage: boolean;
  showEditBookPage: boolean;
  editBookIndex: number | null;
}

const initialState: BooksState = {
  books: [
    { name: 'Book 1', price: 10, category: 'Fiction', description: 'Description of Book 1' },
    { name: 'Book 2', price: 20, category: 'Non-Fiction', description: 'Description of Book 2' },
  ],
  showBookList: true,
  showAddBookPage: false,
  showEditBookPage: false,
  editBookIndex: null
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
      state.showBookList = false; 
      state.showAddBookPage = false;
      state.showEditBookPage = false;
    },
    editBook: (state, action: PayloadAction<{ index: number, book: Book }>) => {
      const { index, book } = action.payload;
      if (index >= 0 && index < state.books.length) {
        state.books[index] = book; 
      } else {
        console.error('Invalid index', index);
      }
    },
    
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books.splice(action.payload, 1);
      if (state.editBookIndex === action.payload) {
        state.showEditBookPage = false;
      }
      state.editBookIndex = null;
    },
    setShowAddBookPage: (state, action: PayloadAction<boolean>) => {
      state.showAddBookPage = action.payload;
      state.showBookList = !action.payload; 
    },
    setShowEditBookPage: (state, action: PayloadAction<boolean>) => {
      state.showEditBookPage = action.payload;
      state.showBookList = !action.payload; 
    },
    setEditBookIndex: (state, action: PayloadAction<number | null>) => {
      state.editBookIndex = action.payload;
    }
  }
});


export const { addBook, deleteBook, editBook, setShowAddBookPage, setShowEditBookPage, setEditBookIndex } = booksSlice.actions;

export default booksSlice.reducer;
