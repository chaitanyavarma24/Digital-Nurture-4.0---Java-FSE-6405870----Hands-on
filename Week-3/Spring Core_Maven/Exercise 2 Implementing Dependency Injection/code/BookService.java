package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter 
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Updated method
    public void issueBook(String bookName) {
        System.out.println("Issuing book: " + bookName);
        bookRepository.save(bookName);
    }
}
