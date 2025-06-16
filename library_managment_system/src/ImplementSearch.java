import java.util.List;

public class ImplementSearch {

    public static Book linearSearch(List<Book> books, String title) {
        for (Book book : books) {
            if (book.title.equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    public static Book binarySearch(List<Book> books, String title) {
        int left = 0;
        int right = books.size() - 1;
        title = title.toLowerCase();

        while (left <= right) {
            int mid = (left + right) / 2;
            String midTitle = books.get(mid).title.toLowerCase();

            int compare = midTitle.compareTo(title);
            if (compare == 0) {
                return books.get(mid);
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}
