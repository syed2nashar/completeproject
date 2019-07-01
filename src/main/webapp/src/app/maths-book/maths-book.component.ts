import { Component, OnInit } from '@angular/core';
import {Book} from './math-book';
import { MathBookService } from './maths-book.service';
import { error } from 'util';


@Component({
  selector: 'app-book',
  templateUrl: './maths-book.component.html',
  styleUrls: ['./maths-book.component.css']
})
export class MathsBookComponent implements OnInit {


  books: Book[];
  book = new Book();
  constructor(private _bookService: MathBookService) { }

  ngOnInit():void {
    this.getBooks();
  }

  getBooks(): void{
    this._bookService.getAllBooks()
    .subscribe((bookData) => {
      this.books = bookData, 
      console.log(bookData)
    }, (error) =>{
      console.log(error);
    });
  }


  addBook(): void{
    this._bookService.addBook(this.book)
    .subscribe((response) => {
      console.log(response);
    this.reset();
    this.getBooks();
    }, (error) => {
      console.log(error);
    });
  }

  private reset(){
    this.book.id = null;
    this.book.title = null;
    this.book.author = null;
  }

  deleteBook(bookId: string){
    this._bookService.deleteBook(bookId)
    .subscribe((response) => {console.log(response);
      this.getBooks();
    }, (error) => {
      console.log(error);
    })
  }


  getBookById(bookId: string){
    this._bookService.getBookById(bookId)
    .subscribe((bookData) => {this.book = bookData; this.getBooks();}, (error) => {
      console.log(error);
    })

  }
}
