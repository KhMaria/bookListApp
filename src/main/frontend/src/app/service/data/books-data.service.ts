import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/Book';
import { API_URL } from './../../app.constants';

export class HelloWorldBean{
    constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor(private httpClient:HttpClient) { }


  retrieveAllBooks(){
    return this.httpClient.get<Book[]>(API_URL+'/books-list');
  }

  addBook(author:string, name: string){
    return this.httpClient.post<Book>(API_URL+'/books-list', new Book(-1, author,name));
  }
}
