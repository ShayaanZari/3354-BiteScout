import static org.junit.Assert.assertEquals;
import org.junit.Test;

// run tests from here
public class RestaurantFinderTest {

    @Test
    public void testGetDirections() {
        String expectedAddress = "123 apple st.";
        String actualAddress = RestaurantFinder.getDirections("chipotle");
        assertEquals("should find the correct address for chipotle", expectedAddress, actualAddress);
    }

    @Test
    public void testRestaurantNotFound() {
        String expectedString = "Error: restaurant name not found";
        String actualAddress = RestaurantFinder.getDirections("chick-fila");
        assertEquals("should return error", expectedString, actualAddress);
    }

    @Test
    public void testNullRestaurant() {
        String expectedString = "Error: restaurant name is null";
        String actualAddress = RestaurantFinder.getDirections(null);
        assertEquals("should return error", expectedString, actualAddress);
    }

    @Test
    public void testEmptyRestaurant() {
        String expectedString = "Error: restaurant name is empty";
        String actualAddress = RestaurantFinder.getDirections("");
        assertEquals("should return error", expectedString, actualAddress);
    }

    @Test
    public void testWhitespaceRestaurant() {
        String expectedString = "Error: restaurant name is empty";
        String actualAddress = RestaurantFinder.getDirections("        ");
        assertEquals("should return error", expectedString, actualAddress);
    }

    @Test
    public void testCaseUpperRestaurant() {
        String expectedAddress = "456 banana st.";
        String actualAddress = RestaurantFinder.getDirections("JIMMY JOHNS");
        assertEquals("should find the correct address for jimmy johns", expectedAddress, actualAddress);
    }

    @Test
    public void testCaseMixedRestaurant() {
        String expectedAddress = "789 orange rd.";
        String actualAddress = RestaurantFinder.getDirections("Olive Garden");
        assertEquals("should find the correct address for olive garden", expectedAddress, actualAddress);
    }

    @Test
    public void testSpacePaddingRestaurant() {
        String expectedAddress = "110 main st.";
        String actualAddress = RestaurantFinder.getDirections("   Five Guys    ");
        assertEquals("should find the correct address for five guys", expectedAddress, actualAddress);
    }
}
