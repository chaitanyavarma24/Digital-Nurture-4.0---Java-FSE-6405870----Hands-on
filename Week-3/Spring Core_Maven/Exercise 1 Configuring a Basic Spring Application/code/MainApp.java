package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring application context from XML
        ApplicationContext con = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean and call method
        BookService bookService = con.getBean("bookService", BookService.class);
        bookService.displayBook();
    }
}
