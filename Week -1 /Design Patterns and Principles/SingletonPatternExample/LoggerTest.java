public class LoggerTest {
    public static void main(String[] args) {
        System.out.println("Testing Logger...");

        Logger loggerA = Logger.getInstance();
        Logger loggerB = Logger.getInstance();

        if (loggerA == loggerB) {
            System.out.println("PASS: Same instance");
        } else {
            System.out.println("FAIL: Different instances");
        }

        loggerA.log("Message from loggerA");
        loggerB.log("Message from loggerB");
    }
}
