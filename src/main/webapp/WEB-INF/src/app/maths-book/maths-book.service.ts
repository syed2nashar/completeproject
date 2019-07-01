import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './math-book';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class MathBookService{

    constructor(private _httpServices: Http){}

    getAllBooks(): Observable<Book[]>{
        return this._httpServices.get("http://localhost:8083/bookapi_springangular/api/book").pipe
        (map((response: Response) => response.json())).pipe(catchError(this.handleError));
    }

    private handleError(error: Response){
        return Observable.throw(error);
    }

    addBook(book: Book){
        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        if(book.id){
            return this._httpServices.put('http://localhost:8083/bookapi_springangular/api/book/'+book.id, body, options)
        }else{
            return this._httpServices.post("http://localhost:8083/bookapi_springangular/api/book", body, options);
        }
   }


    deleteBook(bookId: string){
        return this._httpServices.delete('http://localhost:8083/bookapi_springangular/api/book/'+bookId);
    }



    getBookById(bookId: string): Observable<Book>{
        return this._httpServices.get("http://localhost:8083/bookapi_springangular/api/book/"+bookId).pipe
        (map((response: Response) => response.json())).pipe(catchError(this.handleError));
    }


}
