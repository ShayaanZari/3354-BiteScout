import java.util.HashMap;

public class RestaurantFinder {
    public static String getDirections(String restaurantName) {
        HashMap<String, String> restaurants = new HashMap<>();
        restaurants.put("chipotle", "123 apple st.");
        restaurants.put("jimmy johns", "456 banana st.");
        restaurants.put("olive garden", "789 orange rd.");
        restaurants.put("five guys", "110 main st.");
        restaurants.put("subway", "987 park ln.");

        if (restaurantName == null) {
            return "Error: restaurant name is null";
        }
        if (restaurantName.trim().isEmpty()) {
            return "Error: restaurant name is empty";
        }

        String lookupkey = restaurantName.trim().toLowerCase();

        if (!restaurants.containsKey(lookupkey)) {
            return "Error: restaurant name not found";
        }
        return restaurants.get(lookupkey);
    }
}
