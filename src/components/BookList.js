import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onAdd }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default BookList;
