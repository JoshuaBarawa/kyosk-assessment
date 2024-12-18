import React, { useEffect, useState, useMemo } from 'react';
import './booksview.css';

export default function BooksView () {
     const books = useMemo(() => [
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
          "title": "Harry Potter and the Sorcerer's Stone",
          "author": "J.K. Rowling",
          "readingLevel": "Intermediate"
        },
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "readingLevel": "Advanced"
        },
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
          "title": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "readingLevel": "Intermediate"
        },
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
          "title": "Green Eggs and Ham",
          "author": "Dr. Seuss",
          "readingLevel": "Beginner"
        },
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
          "title": "1984",
          "author": "George Orwell",
          "readingLevel": "Advanced"
        },
        {
          "coverPhotoUrl": "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
          "title": "Charlotte's Web",
          "author": "E.B. White",
          "readingLevel": "Beginner"
        }
      ], [])

    const [allBooks, setAllBooks] = useState(books);
    const [searchTitle, setSearchTitle] = useState('');
  
    useEffect(() => {
        const filteredBooks = searchTitle.trim() === ''
            ? books
            : books.filter(book =>
                book.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
        setAllBooks(filteredBooks);
    }, [searchTitle, books]);

    const handleSearchInputChange = (e) => {
        setSearchTitle(e.target.value);
    };

    return (
        <div className='main-container'>
            <h1 className='container-title'><span>Tiny Tales:</span> Books for Dreamers</h1>
            <div className='search-book-section'>
                <input
                    type='text'
                    className="search-book-input"
                    value={searchTitle}
                    onChange={handleSearchInputChange}
                    placeholder='Find book i.e title'
                />
            </div>
            
                <div className='books-container'>
                    {allBooks.map((book, index) => (
                        <div className='book-card' >
                            <img src={`${book?.coverPhotoUrl}`} alt="book-cover" id='book-cover' />
                            <p id='book-title'>{book?.title}</p>
                            <p id="book-author">by {book?.author}</p>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

