import type { Request, Response } from 'express';
import { BookService } from '../services/BookService.js';

export class HomeController {
    static index(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData["title"] = "Home";
        
        res.render('home/index', { viewData: viewData });
    }
    static about(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData["title"] = "About";

        res.render('home/about', { viewData: viewData });
    }
    static contact(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData["title"] = "Contact";

        res.render('home/contact', { viewData: viewData });
    }
    static listBooks(req: Request, res: Response): void {
        const books = BookService.getAllBooks();

        res.render("home/books", {
            title: "Books",
            books: books
        });
    }
    static show(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const book = BookService.getBookById(id);
        if (!book) {
            res.status(404).send("Book not found"); // manejo de error simple
            return;
        }

        res.render("home/show", { book });
    }
}