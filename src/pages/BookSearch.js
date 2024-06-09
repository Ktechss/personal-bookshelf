import React, { useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setQuery(query);

    if (query) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setBooks(response.data.docs.map(book => ({
        ...book,
        edition_count: book.edition_count || 0 // Default to 0 if edition count is not available
      })));
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Search for a book..." 
      />
      <BookList books={books} onAdd={onAdd} />
    </div>
  );
};

export default BookSearch;
