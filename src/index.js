import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App'; 
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  
  const handleSearch = (e) => {e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => {setBooks(res.data.items);})
      .catch((err) => {console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit = {handleSearch}>
        <input type = "text" value = {query} onChange = {(e) => setQuery(e.target.value)}/>
        <button type = "submit">Search</button>
      </form>
      {books.map((book) => (<div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookSearch;


