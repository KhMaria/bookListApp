import { Component, OnInit } from '@angular/core';
import { BooksDataService } from './service/data/books-data.service';
import { Book } from './Book';

@Component({
  selector: 'app-root',
  template: `
  <div class="layout">
  <div class="sidebar"></div>
    <div class="content">
        <app-books-list [books]="books"></app-books-list>
        <app-new-book-form (onAddBook)="onAddBook($event)"></app-new-book-form>
    </div>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BooksDataService) { }

  ngOnInit() {
    this.bookService.retrieveAllBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }

  onAddBook(book: Book) {
    this.books.push(book);
  }
}
