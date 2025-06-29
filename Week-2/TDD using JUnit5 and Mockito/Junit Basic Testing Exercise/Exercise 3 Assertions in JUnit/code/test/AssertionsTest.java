

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertEquals() {
        assertEquals(5, 2 + 3, "2 + 3 should equal 5");
    }

    @Test
    public void testAssertTrue() {
        assertTrue(5 > 3, "5 should be greater than 3");
    }

    @Test
    public void testAssertFalse() {
        assertFalse(5 < 3, "5 should not be less than 3");
    }

    @Test
    public void testAssertNull() {
        assertNull(null, "Object should be null");
    }

    @Test
    public void testAssertNotNull() {
        assertNotNull(new Object(), "Object should not be null");
    }

    @Test
    public void testAssertSame() {
        String str = "Hello";
        assertSame(str, str, "Should be the same object");
    }

    @Test
    public void testAssertNotSame() {
        assertNotSame(new String("Hello"), new String("Hello"), "Should be different objects");
    }

    @Test
    public void testAssertArrayEquals() {
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals(expected, actual, "Arrays should be equal");
    }

    @Test
    public void testAssertThrows() {
        assertThrows(ArithmeticException.class, () -> {
            int result = 1 / 0;
        }, "Division by zero should throw ArithmeticException");
    }
}