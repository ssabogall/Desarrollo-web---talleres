export class Book {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public price: number,
    public stock: number
  ) {}
    /* 
    static findById creo que es una mejor forma de manejarlo asi, porque asi no me saldra un 
    error de tipo "undefined" si no encuentra el libro, sino que me devolvera "null" y puedo 
    manejarlo mejor en el codigo que lo llame, si ya luego necesito yo necesito que me salga 
    un error no deberia ser en los modelos, sino en controladores.
    */
  static findById(books: Book[], id: number): Book | null {
    return books.find(book => book.id === id) || null;
  }
}
