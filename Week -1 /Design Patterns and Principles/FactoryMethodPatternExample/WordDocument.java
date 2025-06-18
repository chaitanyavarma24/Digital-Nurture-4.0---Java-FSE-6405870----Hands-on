package factory;

public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening a Microsoft Word document...");
    }
}