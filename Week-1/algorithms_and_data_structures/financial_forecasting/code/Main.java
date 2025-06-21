public class Main {
    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.10; // 10% annual growth
        int years = 5;

        double futureValue = Forecast.predictValue(initialValue, growthRate, years);
        System.out.println("Predicted value after " + years + " years: " + futureValue);
    }
}