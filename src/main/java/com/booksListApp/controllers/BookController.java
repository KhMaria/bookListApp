package com.booksListApp.controllers;

import com.booksListApp.repositories.BookJpaRepository;
import com.booksListApp.models.Book;
import com.booksListApp.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping(path = "/books-list")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping(path = "/books-list")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book addedBook = bookService.addBook(book);
        return new ResponseEntity<Book>(addedBook, HttpStatus.OK);
    }

}
