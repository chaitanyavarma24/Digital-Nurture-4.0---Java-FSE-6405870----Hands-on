public class Forecast {
    public static double predictValue(double initialValue, double growthRate, int years) {
        if (years == 0) return initialValue;
        return predictValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }
}