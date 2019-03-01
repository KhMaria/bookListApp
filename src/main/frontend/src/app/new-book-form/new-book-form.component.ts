import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../Book';
import { BooksDataService } from '../service/data/books-data.service';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})
export class NewBookFormComponent implements OnInit {

  author = '';
  name = '';

  @Output() onAddBook = new EventEmitter<Book>();

  constructor(private bookService: BooksDataService) { }

  addBook() {
    this.bookService.addBook(this.author, this.name).subscribe(
      data => this.addBookToList(data)
    );
    this.author = '';
    this.name = '';
  }

  addBookToList(book: Book) {
    this.onAddBook.emit(book);
  }

  ngOnInit() {
  }

}
