
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MultiplierTest {

	
	@Test
	public void testMultiply() {
        // Arrange
        Multiplier multiplier = new Multiplier();
        int a = 4;
        int b = 3;
        int expected = 12;

        // Act
        int result = multiplier.multiply(a, b);

        // Assert
        assertEquals(expected, result, "4 multiplied by 3 should be 12");
    }

    @Test
    public void testSquare() {
        // Arrange
        Multiplier multiplier = new Multiplier();
        int a = 5;
        int expected = 25;

        // Act
        int result = multiplier.square(a);

        // Assert
        assertEquals(expected, result, "Square of 5 should be 25");
        
        
}
}
