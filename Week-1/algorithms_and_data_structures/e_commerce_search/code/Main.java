public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "T-Shirt", "Fashion")
        };

        Product result1 = LinearSearch.searchByName(products, "Phone");
        System.out.println("Linear Search: " + (result1 != null ? result1.productName : "Not found"));

        Product result2 = BinarySearch.searchByName(products, "Phone");
        System.out.println("Binary Search: " + (result2 != null ? result2.productName : "Not found"));
    }
}