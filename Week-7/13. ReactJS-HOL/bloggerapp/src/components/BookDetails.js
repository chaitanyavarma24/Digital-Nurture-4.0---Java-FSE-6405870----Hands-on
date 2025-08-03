import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'React Explained', price: '700' },
    { id: 2, title: 'Learning React', price: '5000' },
  ];

  return (
    <div>
      <h1>Book Details</h1>

      {books.map(book=>(
        <div key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
