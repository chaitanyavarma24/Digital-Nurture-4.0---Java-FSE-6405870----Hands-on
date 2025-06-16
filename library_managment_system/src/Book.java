public class Book {
    public int id;
    public String title;
    public String author;

    public Book(int id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {
        return "[" + id + ", " + title + ", " + author + "]";
    }
}
