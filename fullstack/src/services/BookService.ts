/* 
los imports se ponen como .js, porque aunque estemos trabajando con TypeScript, el código se 
compila a JavaScript, y en JavaScript no se pueden importar archivos con extensión .ts, sino 
que se deben importar con extensión .js. Esto es una convención que se sigue para evitar 
confusiones y asegurar que el código funcione correctamente tanto en desarrollo como en producción.
*/
import { books } from "../data/Books.js";
import { Book } from "../models/Book.js";

export class BookService {
  static getAllBooks(): Book[] {
    return books;
  }

  static getBookById(id: number): Book | null {
    return Book.findById(books, id);
  }
}
