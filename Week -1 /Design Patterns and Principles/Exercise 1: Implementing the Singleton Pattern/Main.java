package singleton;

public class Main {
    public static void main(String[] args) {
        Logger firstLogger = Logger.getInstance();
        firstLogger.log("App started.");

        Logger secondLogger = Logger.getInstance();
        secondLogger.log("App still running.");

        if (firstLogger == secondLogger) {
            System.out.println("Same Logger instance is reused.");
        } else {
            System.out.println("Different Logger instances found!");
        }
    }
}
