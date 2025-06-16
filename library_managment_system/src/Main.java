import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Book> books = new ArrayList<>();
        books.add(new Book(1, "Rich Dad and Poor Dad", "XYZ"));
        books.add(new Book(2, "Harry Potter", "ABC"));
        books.add(new Book(3, "The Alchemist", "PQR"));
        books.add(new Book(4, "The 7 Habits of Highly Effective People", "STU"));
        books.add(new Book(5, "Atomic Habits", "ABC"));

        // Sort for binary search
        books.sort(Comparator.comparing(book -> book.title.toLowerCase()));

        System.out.println("Enter a book to Search:");
        Scanner scanner = new Scanner(System.in);
        String search = scanner.nextLine();

        Book linearAns = ImplementSearch.linearSearch(books, search);
        System.out.println("Linear Search Result: " + (linearAns != null ? linearAns : "Book not found"));

        Book binaryAns = ImplementSearch.binarySearch(books, search);
        System.out.println("Binary Search Result: " + (binaryAns != null ? binaryAns : "Book not found"));
    }
}
