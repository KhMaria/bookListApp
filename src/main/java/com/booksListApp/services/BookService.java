package com.booksListApp.services;

import com.booksListApp.models.Book;

import java.util.List;

public interface BookService {
    Book addBook(Book book);
    List<Book> getAllBooks();
}
