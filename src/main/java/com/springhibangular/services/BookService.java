package com.springhibangular.services;

import java.util.List;

import com.springhibangular.model.Book;

public interface BookService {

	// save
	long save(Book book);
	
	// get single
	Book get(long id);
	
	// get all
	List<Book> list();
	
	//update
	void update(long id, Book book);
	
	// delete
	void delete(long id);
}
