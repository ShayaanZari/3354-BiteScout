const restaurants = [
    {
        id: 1,
        name: "Bella Vista Italian",
        category: "Italian",
        rating: 4.5,
        price: 3,
        distance: 2.5,
        description: "Authentic Italian cuisine with fresh pasta and wood-fired pizzas. Cozy atmosphere perfect for date nights.",
        address: "123 Main St, Downtown",
        tags: ["Italian", "Casual", "Dinner"]
    },
    {
        id: 2,
        name: "Sakura Sushi Bar",
        category: "Japanese",
        rating: 4.8,
        price: 4,
        distance: 1.8,
        description: "Premium sushi and sashimi. Master chefs prepare fresh fish daily. Reservations recommended.",
        address: "456 Oak Ave, Midtown",
        tags: ["Japanese", "Fine Dining", "Dinner"]
    },
    {
        id: 3,
        name: "Taco Fiesta",
        category: "Mexican",
        rating: 4.2,
        price: 2,
        distance: 3.2,
        description: "Vibrant Mexican street food with authentic flavors. Great for casual dining and groups.",
        address: "789 Elm St, Eastside",
        tags: ["Mexican", "Family-Friendly", "Lunch"]
    },
    {
        id: 4,
        name: "The Green Garden",
        category: "Vegetarian",
        rating: 4.6,
        price: 3,
        distance: 4.1,
        description: "Plant-based cuisine with creative dishes. Organic ingredients and sustainable practices.",
        address: "321 Pine Rd, Westside",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 5,
        name: "BBQ Smokehouse",
        category: "American",
        rating: 4.4,
        price: 2,
        distance: 5.5,
        description: "Slow-smoked meats and classic sides. Rustic atmosphere with live music on weekends.",
        address: "654 Maple Dr, Northside",
        tags: ["American", "Bar", "Late Night"]
    },
    {
        id: 6,
        name: "Le Petit Bistro",
        category: "French",
        rating: 4.7,
        price: 4,
        distance: 2.1,
        description: "Elegant French bistro serving classic dishes. Intimate setting with excellent wine selection.",
        address: "987 Cedar Ln, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 7,
        name: "Spice Route",
        category: "Indian",
        rating: 4.3,
        price: 2,
        distance: 3.8,
        description: "Authentic Indian curries and tandoori dishes. Vegetarian and vegan options available.",
        address: "147 Spice St, Southside",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 8,
        name: "Ocean's Catch",
        category: "Seafood",
        rating: 4.5,
        price: 3,
        distance: 6.2,
        description: "Fresh seafood daily. Specializes in grilled fish and lobster. Waterfront views.",
        address: "258 Harbor Blvd, Waterfront",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 9,
        name: "Golden Dragon",
        category: "Chinese",
        rating: 5.0,
        price: 1,
        distance: 1.0,
        description: "Authentic Chinese cuisine with traditional recipes. Quick service and affordable prices. Perfect for lunch or dinner.",
        address: "111 Dragon Way, Chinatown",
        tags: ["Chinese", "Fast Food", "Lunch"]
    },
    {
        id: 10,
        name: "The Steakhouse",
        category: "Steakhouse",
        rating: 4.9,
        price: 4,
        distance: 2.3,
        description: "Premium steaks and fine wines. Elegant dining experience with expert sommelier. Perfect for special occasions.",
        address: "222 Prime Ave, Uptown",
        tags: ["American", "Fine Dining", "Dinner"]
    },
    {
        id: 11,
        name: "Burger Junction",
        category: "American",
        rating: 4.1,
        price: 1,
        distance: 0.8,
        description: "Classic burgers and fries. Fast casual dining with fresh ingredients. Great for families.",
        address: "333 Burger St, Downtown",
        tags: ["American", "Family-Friendly", "Lunch"]
    },
    {
        id: 12,
        name: "Mediterranean Breeze",
        category: "Mediterranean",
        rating: 4.7,
        price: 2,
        distance: 3.4,
        description: "Fresh Mediterranean dishes with olive oil and herbs. Healthy options and vegetarian-friendly menu.",
        address: "444 Olive Blvd, Midtown",
        tags: ["Mediterranean", "Casual", "Lunch"]
    },
    {
        id: 13,
        name: "Thai Orchid",
        category: "Thai",
        rating: 4.6,
        price: 2,
        distance: 4.5,
        description: "Authentic Thai cuisine with bold flavors. Spicy and mild options available. Cozy atmosphere.",
        address: "555 Spice Lane, Eastside",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 14,
        name: "Cafe Mornings",
        category: "Cafe",
        rating: 4.3,
        price: 1,
        distance: 1.5,
        description: "Cozy cafe with artisanal coffee and fresh pastries. Perfect for breakfast and brunch. Free WiFi.",
        address: "666 Coffee Ave, Downtown",
        tags: ["American", "Café", "Brunch"]
    },
    {
        id: 15,
        name: "The Grand Buffet",
        category: "Buffet",
        rating: 3.8,
        price: 2,
        distance: 5.8,
        description: "All-you-can-eat buffet with international cuisine. Great value for families and large groups.",
        address: "777 Feast Rd, Northside",
        tags: ["American", "Family-Friendly", "Lunch"]
    },
    {
        id: 16,
        name: "Sushi Master",
        category: "Japanese",
        rating: 5.0,
        price: 4,
        distance: 1.2,
        description: "Omakase experience with master sushi chef. Premium ingredients and traditional techniques. Reservations required.",
        address: "888 Sushi Way, Downtown",
        tags: ["Japanese", "Fine Dining", "Dinner"]
    },
    {
        id: 17,
        name: "Italian Express",
        category: "Italian",
        rating: 3.5,
        price: 1,
        distance: 1.3,
        description: "Quick Italian fare with pasta and pizza. Affordable prices and fast service.",
        address: "999 Pasta St, Downtown",
        tags: ["Italian", "Fast Food", "Lunch"]
    },
    {
        id: 18,
        name: "Seaside Grill",
        category: "Seafood",
        rating: 4.0,
        price: 1,
        distance: 2.0,
        description: "Fresh seafood at affordable prices. Casual dining with ocean views.",
        address: "101 Ocean Dr, Waterfront",
        tags: ["American", "Casual", "Lunch"]
    },
    {
        id: 19,
        name: "Veggie Delight",
        category: "Vegetarian",
        rating: 3.9,
        price: 1,
        distance: 1.7,
        description: "Budget-friendly vegetarian options. Healthy and delicious plant-based meals.",
        address: "202 Green St, Downtown",
        tags: ["American", "Casual", "Lunch"]
    },
    {
        id: 20,
        name: "Sunrise Cafe",
        category: "Cafe",
        rating: 4.2,
        price: 1,
        distance: 0.9,
        description: "Early morning breakfast spot with fresh pastries and coffee.",
        address: "303 Dawn Ave, Downtown",
        tags: ["American", "Café", "Breakfast"]
    },
    {
        id: 21,
        name: "Tokyo Ramen",
        category: "Japanese",
        rating: 4.1,
        price: 2,
        distance: 2.4,
        description: "Authentic ramen bowls with rich broths. Quick service and great value.",
        address: "404 Noodle Way, Midtown",
        tags: ["Japanese", "Casual", "Lunch"]
    },
    {
        id: 22,
        name: "French Bistro Express",
        category: "French",
        rating: 3.7,
        price: 2,
        distance: 3.6,
        description: "Casual French dining with classic dishes. Affordable French cuisine.",
        address: "505 Bistro Ln, Eastside",
        tags: ["French", "Casual", "Lunch"]
    },
    {
        id: 23,
        name: "Indian Spice House",
        category: "Indian",
        rating: 4.4,
        price: 2,
        distance: 2.8,
        description: "Authentic Indian flavors with vegetarian and meat options.",
        address: "606 Curry Rd, Midtown",
        tags: ["Indian", "Casual", "Lunch"]
    },
    {
        id: 24,
        name: "Sushi Express",
        category: "Japanese",
        rating: 3.6,
        price: 2,
        distance: 4.2,
        description: "Affordable sushi and Japanese dishes. Quick service and fresh ingredients.",
        address: "707 Sushi Ave, Westside",
        tags: ["Japanese", "Casual", "Lunch"]
    },
    {
        id: 25,
        name: "Mediterranean Kitchen",
        category: "Mediterranean",
        rating: 4.3,
        price: 2,
        distance: 1.6,
        description: "Fresh Mediterranean cuisine with healthy options.",
        address: "808 Olive St, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 26,
        name: "Thai Express",
        category: "Thai",
        rating: 3.8,
        price: 2,
        distance: 2.9,
        description: "Quick Thai food with authentic flavors. Great for lunch or dinner.",
        address: "909 Spice Blvd, Midtown",
        tags: ["Thai", "Fast Food", "Lunch"]
    },
    {
        id: 27,
        name: "Chinese Garden",
        category: "Chinese",
        rating: 4.5,
        price: 2,
        distance: 3.1,
        description: "Traditional Chinese dishes with vegetarian options available.",
        address: "110 Garden Way, Eastside",
        tags: ["Chinese", "Casual", "Dinner"]
    },
    {
        id: 28,
        name: "Mexican Fiesta Express",
        category: "Mexican",
        rating: 3.9,
        price: 1,
        distance: 1.4,
        description: "Quick Mexican food with fresh ingredients. Affordable and delicious.",
        address: "211 Fiesta St, Downtown",
        tags: ["Mexican", "Casual", "Lunch"]
    },
    {
        id: 29,
        name: "Ocean Breeze",
        category: "Seafood",
        rating: 4.6,
        price: 3,
        distance: 1.9,
        description: "Fresh seafood with elegant presentation. Great for special occasions.",
        address: "312 Wave Ave, Waterfront",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 30,
        name: "Italian Trattoria",
        category: "Italian",
        rating: 4.8,
        price: 3,
        distance: 2.7,
        description: "Authentic Italian trattoria with homemade pasta and traditional recipes.",
        address: "413 Trattoria Ln, Midtown",
        tags: ["Italian", "Casual", "Dinner"]
    },
    {
        id: 31,
        name: "French Fine Dining",
        category: "French",
        rating: 5.0,
        price: 3,
        distance: 1.1,
        description: "Exquisite French cuisine with wine pairings. Elegant atmosphere.",
        address: "514 Elegance Blvd, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 32,
        name: "Indian Palace",
        category: "Indian",
        rating: 4.7,
        price: 3,
        distance: 3.3,
        description: "Upscale Indian restaurant with traditional and modern dishes.",
        address: "615 Palace Rd, Midtown",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 33,
        name: "Thai Royal",
        category: "Thai",
        rating: 4.9,
        price: 3,
        distance: 2.2,
        description: "Premium Thai cuisine with authentic flavors and elegant presentation.",
        address: "716 Royal Way, Uptown",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 34,
        name: "Chinese Imperial",
        category: "Chinese",
        rating: 4.4,
        price: 3,
        distance: 4.0,
        description: "Upscale Chinese dining with traditional and modern dishes.",
        address: "817 Imperial Ave, Eastside",
        tags: ["Chinese", "Fine Dining", "Dinner"]
    },
    {
        id: 35,
        name: "Mediterranean Fine Dining",
        category: "Mediterranean",
        rating: 4.8,
        price: 3,
        distance: 1.8,
        description: "Elegant Mediterranean cuisine with fresh ingredients and wine selection.",
        address: "918 Fine Blvd, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 36,
        name: "Le Grand Restaurant",
        category: "French",
        rating: 5.0,
        price: 4,
        distance: 0.5,
        description: "Michelin-starred French restaurant with exceptional cuisine and service.",
        address: "119 Grand Ave, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 37,
        name: "Italian Master Chef",
        category: "Italian",
        rating: 5.0,
        price: 4,
        distance: 1.6,
        description: "Award-winning Italian restaurant with master chef and premium ingredients.",
        address: "220 Master St, Uptown",
        tags: ["Italian", "Fine Dining", "Dinner"]
    },
    {
        id: 38,
        name: "Chinese Dynasty",
        category: "Chinese",
        rating: 4.9,
        price: 4,
        distance: 2.5,
        description: "Premium Chinese restaurant with traditional imperial cuisine.",
        address: "321 Dynasty Way, Uptown",
        tags: ["Chinese", "Fine Dining", "Dinner"]
    },
    {
        id: 39,
        name: "Mediterranean Luxury",
        category: "Mediterranean",
        rating: 5.0,
        price: 4,
        distance: 1.3,
        description: "Luxury Mediterranean dining with exceptional service and premium ingredients.",
        address: "422 Luxury Blvd, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 40,
        name: "Breakfast Club",
        category: "American",
        rating: 4.0,
        price: 1,
        distance: 1.1,
        description: "Classic American breakfast with pancakes, eggs, and bacon.",
        address: "523 Breakfast St, Downtown",
        tags: ["American", "Casual", "Breakfast"]
    },
    {
        id: 41,
        name: "Lunch Box",
        category: "American",
        rating: 3.5,
        price: 1,
        distance: 0.7,
        description: "Quick lunch options with sandwiches and salads.",
        address: "624 Lunch Ave, Downtown",
        tags: ["American", "Casual", "Lunch"]
    },
    {
        id: 42,
        name: "Dinner Time",
        category: "American",
        rating: 4.2,
        price: 2,
        distance: 1.5,
        description: "Casual dinner spot with American classics.",
        address: "725 Dinner Rd, Downtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 43,
        name: "Italian Breakfast",
        category: "Italian",
        rating: 3.2,
        price: 1,
        distance: 1.1,
        description: "Italian breakfast cafe with pastries and coffee.",
        address: "826 Breakfast St, Downtown",
        tags: ["Italian", "Café", "Breakfast"]
    },
    {
        id: 44,
        name: "Sakura Sushi Bar",
        category: "Japanese",
        rating: 3.4,
        price: 1,
        distance: 1.8,
        description: "Affordable sushi and Japanese dishes. Quick service and fresh ingredients.",
        address: "927 Sushi Ave, Downtown",
        tags: ["Japanese", "Casual", "Lunch"]
    },
    {
        id: 45,
        name: "Mexican Breakfast",
        category: "Mexican",
        rating: 3.1,
        price: 1,
        distance: 2.2,
        description: "Authentic Mexican breakfast with huevos and tortillas.",
        address: "128 Breakfast Way, Eastside",
        tags: ["Mexican", "Casual", "Breakfast"]
    },
    {
        id: 46,
        name: "Chinese Breakfast",
        category: "Chinese",
        rating: 3.3,
        price: 1,
        distance: 1.6,
        description: "Traditional Chinese breakfast with dim sum and congee.",
        address: "229 Breakfast Blvd, Chinatown",
        tags: ["Chinese", "Café", "Breakfast"]
    },
    {
        id: 47,
        name: "French Breakfast",
        category: "French",
        rating: 3.6,
        price: 2,
        distance: 2.8,
        description: "Classic French breakfast with croissants and coffee.",
        address: "330 Breakfast Ln, Midtown",
        tags: ["French", "Café", "Breakfast"]
    },
    {
        id: 48,
        name: "Indian Breakfast",
        category: "Indian",
        rating: 3.5,
        price: 1,
        distance: 2.5,
        description: "Traditional Indian breakfast with dosa and idli.",
        address: "431 Breakfast Rd, Eastside",
        tags: ["Indian", "Café", "Breakfast"]
    },
    {
        id: 49,
        name: "Thai Breakfast",
        category: "Thai",
        rating: 3.4,
        price: 1,
        distance: 3.2,
        description: "Thai breakfast with rice porridge and traditional dishes.",
        address: "532 Breakfast St, Eastside",
        tags: ["Thai", "Café", "Breakfast"]
    },
    {
        id: 50,
        name: "Mediterranean Breakfast",
        category: "Mediterranean",
        rating: 3.7,
        price: 2,
        distance: 1.9,
        description: "Mediterranean breakfast with olives, cheese, and bread.",
        address: "633 Breakfast Ave, Midtown",
        tags: ["Mediterranean", "Café", "Breakfast"]
    },
    {
        id: 51,
        name: "Italian Seafood",
        category: "Italian",
        rating: 4.1,
        price: 3,
        distance: 2.4,
        description: "Italian seafood restaurant with fresh fish and pasta.",
        address: "734 Seafood Way, Waterfront",
        tags: ["Italian", "Casual", "Lunch"]
    },
    {
        id: 52,
        name: "Mexican Seafood",
        category: "Mexican",
        rating: 4.0,
        price: 2,
        distance: 3.6,
        description: "Mexican seafood with ceviche and fish tacos.",
        address: "835 Seafood Blvd, Waterfront",
        tags: ["Mexican", "Casual", "Lunch"]
    },
    {
        id: 53,
        name: "Chinese Seafood",
        category: "Chinese",
        rating: 4.2,
        price: 2,
        distance: 2.9,
        description: "Chinese seafood restaurant with fresh fish and shellfish.",
        address: "936 Seafood Rd, Chinatown",
        tags: ["Chinese", "Casual", "Lunch"]
    },
    {
        id: 54,
        name: "French Seafood",
        category: "French",
        rating: 4.4,
        price: 3,
        distance: 2.1,
        description: "French seafood bistro with oysters and bouillabaisse.",
        address: "137 Seafood St, Waterfront",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 55,
        name: "Indian Seafood",
        category: "Indian",
        rating: 4.3,
        price: 2,
        distance: 3.7,
        description: "Indian seafood curry and tandoori fish dishes.",
        address: "238 Seafood Ave, Eastside",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 56,
        name: "Thai Seafood",
        category: "Thai",
        rating: 4.1,
        price: 2,
        distance: 4.1,
        description: "Thai seafood with spicy curries and grilled fish.",
        address: "339 Seafood Way, Eastside",
        tags: ["Thai", "Casual", "Lunch"]
    },
    {
        id: 57,
        name: "Mediterranean Seafood",
        category: "Mediterranean",
        rating: 4.5,
        price: 3,
        distance: 2.6,
        description: "Mediterranean seafood with grilled fish and seafood pasta.",
        address: "440 Seafood Blvd, Waterfront",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 58,
        name: "Italian Vegetarian",
        category: "Italian",
        rating: 4.0,
        price: 2,
        distance: 3.3,
        description: "Italian vegetarian restaurant with pasta and pizza.",
        address: "541 Vegetarian St, Midtown",
        tags: ["Italian", "Casual", "Lunch"]
    },
    {
        id: 59,
        name: "Hibachi Grill",
        category: "Japanese",
        rating: 4.2,
        price: 2,
        distance: 2.7,
        description: "Japanese hibachi with teppanyaki-style cooking. Watch chefs prepare your meal tableside. Great for groups and families.",
        address: "642 Hibachi Ave, Midtown",
        tags: ["Japanese", "Family-Friendly", "Dinner"]
    },
    {
        id: 60,
        name: "Mexican Vegetarian",
        category: "Mexican",
        rating: 3.9,
        price: 1,
        distance: 2.8,
        description: "Mexican vegetarian with bean and vegetable dishes.",
        address: "743 Vegetarian Way, Eastside",
        tags: ["Mexican", "Casual", "Lunch"]
    },
    {
        id: 61,
        name: "French Vegetarian",
        category: "French",
        rating: 4.3,
        price: 3,
        distance: 2.2,
        description: "French vegetarian cuisine with elegant vegetable dishes.",
        address: "844 Vegetarian Blvd, Midtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 62,
        name: "Indian Vegetarian",
        category: "Indian",
        rating: 4.4,
        price: 2,
        distance: 3.9,
        description: "Authentic Indian vegetarian with dal and vegetable curries.",
        address: "945 Vegetarian Rd, Eastside",
        tags: ["Indian", "Casual", "Lunch"]
    },
    {
        id: 63,
        name: "Thai Vegetarian",
        category: "Thai",
        rating: 4.1,
        price: 2,
        distance: 4.3,
        description: "Thai vegetarian with tofu and vegetable dishes.",
        address: "146 Vegetarian St, Eastside",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 64,
        name: "Mediterranean Vegetarian",
        category: "Mediterranean",
        rating: 4.6,
        price: 3,
        distance: 2.3,
        description: "Mediterranean vegetarian with fresh vegetables and grains.",
        address: "247 Vegetarian Ave, Midtown",
        tags: ["Mediterranean", "Casual", "Lunch"]
    },
    {
        id: 65,
        name: "Low Rating Italian",
        category: "Italian",
        rating: 2.5,
        price: 1,
        distance: 4.5,
        description: "Basic Italian food at budget prices.",
        address: "348 Basic St, Outskirts",
        tags: ["Italian", "Fast Food", "Lunch"]
    },
    {
        id: 66,
        name: "Low Rating Japanese",
        category: "Japanese",
        rating: 2.8,
        price: 1,
        distance: 5.2,
        description: "Simple Japanese food, affordable prices.",
        address: "449 Basic Ave, Outskirts",
        tags: ["Japanese", "Casual", "Lunch"]
    },
    {
        id: 67,
        name: "Low Rating Mexican",
        category: "Mexican",
        rating: 2.6,
        price: 1,
        distance: 4.8,
        description: "Basic Mexican food, budget-friendly.",
        address: "550 Basic Way, Outskirts",
        tags: ["Mexican", "Casual", "Lunch"]
    },
    {
        id: 68,
        name: "Low Rating Chinese",
        category: "Chinese",
        rating: 2.7,
        price: 1,
        distance: 5.5,
        description: "Simple Chinese food at low prices.",
        address: "651 Basic Blvd, Outskirts",
        tags: ["Chinese", "Fast Food", "Lunch"]
    },
    {
        id: 69,
        name: "Low Rating American",
        category: "American",
        rating: 2.4,
        price: 1,
        distance: 6.0,
        description: "Basic American food, very affordable.",
        address: "752 Basic Rd, Outskirts",
        tags: ["American", "Fast Food", "Lunch"]
    },
    {
        id: 70,
        name: "One Star Italian",
        category: "Italian",
        rating: 1.5,
        price: 1,
        distance: 7.5,
        description: "Very basic Italian food, minimal service.",
        address: "853 Basic St, Far Outskirts",
        tags: ["Italian", "Casual", "Dinner"]
    },
    {
        id: 71,
        name: "One Star American",
        category: "American",
        rating: 1.8,
        price: 1,
        distance: 8.0,
        description: "Basic fast food, very low prices.",
        address: "954 Basic Ave, Far Outskirts",
        tags: ["American", "Fast Food", "Lunch"]
    },
    {
        id: 72,
        name: "Two Star Chinese",
        category: "Chinese",
        rating: 2.2,
        price: 1,
        distance: 6.8,
        description: "Simple Chinese food, basic service.",
        address: "155 Basic Way, Outskirts",
        tags: ["Chinese", "Casual", "Lunch"]
    },
    {
        id: 73,
        name: "Three Star Japanese",
        category: "Japanese",
        rating: 3.0,
        price: 1,
        distance: 5.9,
        description: "Decent Japanese food at affordable prices.",
        address: "256 Basic Blvd, Outskirts",
        tags: ["Japanese", "Fine Dining", "Dinner"]
    },
    {
        id: 74,
        name: "Three Star Mexican",
        category: "Mexican",
        rating: 3.1,
        price: 1,
        distance: 5.3,
        description: "Good Mexican food, reasonable prices.",
        address: "357 Basic Rd, Outskirts",
        tags: ["Mexican", "Casual", "Dinner"]
    },
    {
        id: 75,
        name: "Four Star Italian",
        category: "Italian",
        rating: 4.0,
        price: 4,
        distance: 0.3,
        description: "Excellent Italian fine dining with premium ingredients.",
        address: "458 Premium St, Downtown",
        tags: ["Italian", "Café", "Breakfast"]
    },
    {
        id: 76,
        name: "Four Star Japanese",
        category: "Japanese",
        rating: 4.0,
        price: 4,
        distance: 0.4,
        description: "Premium Japanese restaurant with exceptional quality.",
        address: "559 Premium Ave, Downtown",
        tags: ["Japanese", "Fine Dining", "Dinner"]
    },
    {
        id: 77,
        name: "Four Star Mexican",
        category: "Mexican",
        rating: 4.0,
        price: 4,
        distance: 0.6,
        description: "Upscale Mexican cuisine with modern presentation.",
        address: "660 Premium Way, Downtown",
        tags: ["Mexican", "Café", "Breakfast"]
    },
    {
        id: 78,
        name: "Four Star Chinese",
        category: "Chinese",
        rating: 4.0,
        price: 4,
        distance: 0.5,
        description: "Premium Chinese restaurant with elegant dining.",
        address: "761 Premium Blvd, Downtown",
        tags: ["Chinese", "Café", "Breakfast"]
    },
    {
        id: 79,
        name: "Four Star French",
        category: "French",
        rating: 4.0,
        price: 4,
        distance: 0.7,
        description: "Fine French dining with classic techniques.",
        address: "862 Premium Rd, Downtown",
        tags: ["French", "Café", "Breakfast"]
    },
    {
        id: 80,
        name: "Four Star Indian",
        category: "Indian",
        rating: 4.0,
        price: 4,
        distance: 0.8,
        description: "Upscale Indian restaurant with refined flavors.",
        address: "963 Premium St, Downtown",
        tags: ["Indian", "Café", "Breakfast"]
    },
    {
        id: 81,
        name: "Four Star Thai",
        category: "Thai",
        rating: 4.0,
        price: 4,
        distance: 0.9,
        description: "Premium Thai restaurant with sophisticated dishes.",
        address: "164 Premium Ave, Downtown",
        tags: ["Thai", "Café", "Breakfast"]
    },
    {
        id: 82,
        name: "Four Star Mediterranean",
        category: "Mediterranean",
        rating: 4.0,
        price: 4,
        distance: 0.2,
        description: "Elegant Mediterranean dining with premium ingredients.",
        address: "265 Premium Way, Downtown",
        tags: ["Mediterranean", "Café", "Breakfast"]
    },
    {
        id: 83,
        name: "Five Star American",
        category: "American",
        rating: 5.0,
        price: 1,
        distance: 0.1,
        description: "Perfect American diner with exceptional service and quality.",
        address: "366 Perfect St, Downtown",
        tags: ["American", "Café", "Breakfast"]
    },
    {
        id: 84,
        name: "Five Star Italian",
        category: "Italian",
        rating: 5.0,
        price: 1,
        distance: 0.2,
        description: "Outstanding Italian food at affordable prices.",
        address: "467 Perfect Ave, Downtown",
        tags: ["Italian", "Café", "Breakfast"]
    },
    {
        id: 85,
        name: "Five Star Japanese",
        category: "Japanese",
        rating: 5.0,
        price: 1,
        distance: 0.3,
        description: "Exceptional Japanese food, incredible value.",
        address: "568 Perfect Way, Downtown",
        tags: ["Japanese", "Casual", "Dinner"]
    },
    {
        id: 86,
        name: "Five Star Mexican",
        category: "Mexican",
        rating: 5.0,
        price: 1,
        distance: 0.4,
        description: "Perfect Mexican food with amazing service.",
        address: "669 Perfect Blvd, Downtown",
        tags: ["Mexican", "Café", "Breakfast"]
    },
    {
        id: 87,
        name: "Five Star Chinese",
        category: "Chinese",
        rating: 5.0,
        price: 1,
        distance: 0.5,
        description: "Excellent Chinese food at great prices.",
        address: "770 Perfect Rd, Downtown",
        tags: ["Chinese", "Café", "Breakfast"]
    },
    {
        id: 88,
        name: "Five Star French",
        category: "French",
        rating: 5.0,
        price: 1,
        distance: 0.6,
        description: "Outstanding French bistro with perfect execution.",
        address: "871 Perfect St, Downtown",
        tags: ["French", "Café", "Breakfast"]
    },
    {
        id: 89,
        name: "Five Star Indian",
        category: "Indian",
        rating: 5.0,
        price: 1,
        distance: 0.7,
        description: "Exceptional Indian food with authentic flavors.",
        address: "972 Perfect Ave, Downtown",
        tags: ["Indian", "Café", "Breakfast"]
    },
    {
        id: 90,
        name: "Five Star Thai",
        category: "Thai",
        rating: 5.0,
        price: 1,
        distance: 0.8,
        description: "Perfect Thai food with amazing taste.",
        address: "173 Perfect Way, Downtown",
        tags: ["Thai", "Café", "Breakfast"]
    },
    {
        id: 91,
        name: "Five Star Mediterranean",
        category: "Mediterranean",
        rating: 5.0,
        price: 1,
        distance: 0.9,
        description: "Outstanding Mediterranean food, incredible quality.",
        address: "274 Perfect Blvd, Downtown",
        tags: ["Mediterranean", "Café", "Breakfast"]
    },
    {
        id: 92,
        name: "Two Star Italian",
        category: "Italian",
        rating: 2.0,
        price: 1,
        distance: 7.0,
        description: "Basic Italian food, minimal quality.",
        address: "375 Basic St, Far Outskirts",
        tags: ["Italian", "Casual", "Lunch"]
    },
    {
        id: 93,
        name: "Two Star Japanese",
        category: "Japanese",
        rating: 2.1,
        price: 1,
        distance: 7.2,
        description: "Simple Japanese food, basic service.",
        address: "476 Basic Ave, Far Outskirts",
        tags: ["Japanese", "Casual", "Lunch"]
    },
    {
        id: 94,
        name: "Two Star Mexican",
        category: "Mexican",
        rating: 2.3,
        price: 1,
        distance: 6.5,
        description: "Basic Mexican food, low quality.",
        address: "577 Basic Way, Outskirts",
        tags: ["Mexican", "Casual", "Lunch"]
    },
    {
        id: 95,
        name: "Two Star Chinese",
        category: "Chinese",
        rating: 2.0,
        price: 1,
        distance: 7.8,
        description: "Simple Chinese food, minimal service.",
        address: "678 Basic Blvd, Far Outskirts",
        tags: ["Chinese", "Casual", "Lunch"]
    },
    {
        id: 96,
        name: "Two Star American",
        category: "American",
        rating: 2.1,
        price: 1,
        distance: 8.5,
        description: "Basic American food, very low quality.",
        address: "779 Basic Rd, Far Outskirts",
        tags: ["American", "Casual", "Lunch"]
    },
    {
        id: 97,
        name: "One Star Japanese",
        category: "Japanese",
        rating: 1.2,
        price: 1,
        distance: 9.0,
        description: "Very basic Japanese food, poor service.",
        address: "880 Basic St, Far Outskirts",
        tags: ["Japanese", "Casual", "Dinner"]
    },
    {
        id: 98,
        name: "One Star Chinese",
        category: "Chinese",
        rating: 1.5,
        price: 1,
        distance: 8.8,
        description: "Minimal Chinese food, very basic.",
        address: "981 Basic Ave, Far Outskirts",
        tags: ["Chinese", "Casual", "Dinner"]
    },
    {
        id: 99,
        name: "One Star Mexican",
        category: "Mexican",
        rating: 1.3,
        price: 1,
        distance: 9.5,
        description: "Very basic Mexican food, minimal quality.",
        address: "182 Basic Way, Far Outskirts",
        tags: ["Mexican", "Casual", "Dinner"]
    },
    {
        id: 100,
        name: "One Star French",
        category: "French",
        rating: 1.0,
        price: 1,
        distance: 10.0,
        description: "Extremely basic French food, poor quality.",
        address: "283 Basic Blvd, Far Outskirts",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 101,
        name: "One Star Indian",
        category: "Indian",
        rating: 1.1,
        price: 1,
        distance: 9.2,
        description: "Very basic Indian food, minimal service.",
        address: "384 Basic Rd, Far Outskirts",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 102,
        name: "One Star Thai",
        category: "Thai",
        rating: 1.4,
        price: 1,
        distance: 8.7,
        description: "Basic Thai food, poor quality.",
        address: "485 Basic St, Far Outskirts",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 103,
        name: "One Star Mediterranean",
        category: "Mediterranean",
        rating: 1.6,
        price: 1,
        distance: 9.8,
        description: "Very basic Mediterranean food, minimal service.",
        address: "586 Basic Ave, Far Outskirts",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 104,
        name: "Three Star American",
        category: "American",
        rating: 3.0,
        price: 2,
        distance: 4.2,
        description: "Decent American food at reasonable prices.",
        address: "687 Decent Way, Midtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 105,
        name: "Three Star French",
        category: "French",
        rating: 3.2,
        price: 2,
        distance: 3.8,
        description: "Good French food, acceptable quality.",
        address: "788 Decent Blvd, Midtown",
        tags: ["French", "Casual", "Lunch"]
    },
    {
        id: 106,
        name: "Three Star Indian",
        category: "Indian",
        rating: 3.3,
        price: 2,
        distance: 4.6,
        description: "Decent Indian food, reasonable prices.",
        address: "889 Decent Rd, Eastside",
        tags: ["Indian", "Casual", "Lunch"]
    },
    {
        id: 107,
        name: "Three Star Thai",
        category: "Thai",
        rating: 3.2,
        price: 2,
        distance: 4.4,
        description: "Good Thai food, acceptable quality.",
        address: "990 Decent St, Eastside",
        tags: ["Thai", "Casual", "Lunch"]
    },
    {
        id: 108,
        name: "Three Star Mediterranean",
        category: "Mediterranean",
        rating: 3.4,
        price: 2,
        distance: 3.7,
        description: "Decent Mediterranean food, reasonable prices.",
        address: "191 Decent Ave, Midtown",
        tags: ["Mediterranean", "Casual", "Lunch"]
    },
    {
        id: 109,
        name: "Four Star American",
        category: "American",
        rating: 4.0,
        price: 3,
        distance: 1.7,
        description: "Excellent American fine dining with premium ingredients.",
        address: "292 Premium Way, Downtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 110,
        name: "Five Star American",
        category: "American",
        rating: 5.0,
        price: 2,
        distance: 1.0,
        description: "Perfect American restaurant with exceptional quality.",
        address: "393 Perfect Blvd, Downtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 111,
        name: "Five Star Italian",
        category: "Italian",
        rating: 5.0,
        price: 2,
        distance: 1.1,
        description: "Outstanding Italian food, incredible value.",
        address: "494 Perfect Rd, Downtown",
        tags: ["Italian", "Casual", "Dinner"]
    },
    {
        id: 112,
        name: "Five Star Japanese",
        category: "Japanese",
        rating: 5.0,
        price: 2,
        distance: 1.2,
        description: "Perfect Japanese food with amazing service.",
        address: "595 Perfect St, Downtown",
        tags: ["Japanese", "Casual", "Dinner"]
    },
    {
        id: 113,
        name: "Five Star Mexican",
        category: "Mexican",
        rating: 5.0,
        price: 2,
        distance: 1.3,
        description: "Exceptional Mexican food, incredible quality.",
        address: "696 Perfect Ave, Downtown",
        tags: ["Mexican", "Casual", "Dinner"]
    },
    {
        id: 114,
        name: "Five Star Chinese",
        category: "Chinese",
        rating: 5.0,
        price: 2,
        distance: 1.4,
        description: "Perfect Chinese food with outstanding service.",
        address: "797 Perfect Way, Downtown",
        tags: ["Chinese", "Casual", "Dinner"]
    },
    {
        id: 115,
        name: "Five Star French",
        category: "French",
        rating: 5.0,
        price: 2,
        distance: 1.5,
        description: "Outstanding French food, exceptional quality.",
        address: "898 Perfect Blvd, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 116,
        name: "Five Star Indian",
        category: "Indian",
        rating: 5.0,
        price: 2,
        distance: 1.6,
        description: "Perfect Indian food with amazing flavors.",
        address: "999 Perfect Rd, Downtown",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 117,
        name: "Five Star Thai",
        category: "Thai",
        rating: 5.0,
        price: 2,
        distance: 1.7,
        description: "Exceptional Thai food, incredible taste.",
        address: "100 Perfect St, Downtown",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 118,
        name: "Five Star Mediterranean",
        category: "Mediterranean",
        rating: 5.0,
        price: 2,
        distance: 1.8,
        description: "Perfect Mediterranean food with outstanding quality.",
        address: "201 Perfect Ave, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 119,
        name: "Five Star American",
        category: "American",
        rating: 5.0,
        price: 3,
        distance: 0.2,
        description: "Ultimate American fine dining experience.",
        address: "302 Ultimate Way, Downtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 120,
        name: "Five Star Italian",
        category: "Italian",
        rating: 5.0,
        price: 3,
        distance: 0.3,
        description: "Perfect Italian fine dining with world-class service.",
        address: "403 Ultimate Blvd, Downtown",
        tags: ["Italian", "Casual", "Dinner"]
    },
    {
        id: 121,
        name: "Five Star Japanese",
        category: "Japanese",
        rating: 5.0,
        price: 3,
        distance: 0.4,
        description: "Ultimate Japanese dining experience.",
        address: "504 Ultimate Rd, Downtown",
        tags: ["Japanese", "Casual", "Dinner"]
    },
    {
        id: 122,
        name: "Five Star Mexican",
        category: "Mexican",
        rating: 5.0,
        price: 3,
        distance: 0.5,
        description: "Perfect Mexican fine dining with exceptional quality.",
        address: "605 Ultimate St, Downtown",
        tags: ["Mexican", "Casual", "Dinner"]
    },
    {
        id: 123,
        name: "Five Star Chinese",
        category: "Chinese",
        rating: 5.0,
        price: 3,
        distance: 0.6,
        description: "Ultimate Chinese fine dining experience.",
        address: "706 Ultimate Ave, Downtown",
        tags: ["Chinese", "Casual", "Dinner"]
    },
    {
        id: 124,
        name: "Five Star French",
        category: "French",
        rating: 5.0,
        price: 3,
        distance: 0.7,
        description: "Perfect French fine dining with world-class cuisine.",
        address: "807 Ultimate Way, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 125,
        name: "Five Star Indian",
        category: "Indian",
        rating: 5.0,
        price: 3,
        distance: 0.8,
        description: "Ultimate Indian fine dining experience.",
        address: "908 Ultimate Blvd, Downtown",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 126,
        name: "Five Star Thai",
        category: "Thai",
        rating: 5.0,
        price: 3,
        distance: 0.9,
        description: "Perfect Thai fine dining with exceptional service.",
        address: "109 Ultimate Rd, Downtown",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 127,
        name: "Five Star Mediterranean",
        category: "Mediterranean",
        rating: 5.0,
        price: 3,
        distance: 0.1,
        description: "Ultimate Mediterranean fine dining experience.",
        address: "210 Ultimate St, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 128,
        name: "Five Star American",
        category: "American",
        rating: 5.0,
        price: 4,
        distance: 0.1,
        description: "World-class American restaurant with Michelin-starred quality.",
        address: "311 World St, Downtown",
        tags: ["American", "Casual", "Dinner"]
    },
    {
        id: 129,
        name: "Five Star Italian",
        category: "Italian",
        rating: 5.0,
        price: 4,
        distance: 0.2,
        description: "Ultimate Italian fine dining with world-renowned chef.",
        address: "412 World Ave, Downtown",
        tags: ["Italian", "Fine Dining", "Dinner"]
    },
    {
        id: 130,
        name: "Five Star Japanese",
        category: "Japanese",
        rating: 5.0,
        price: 4,
        distance: 0.3,
        description: "World-class Japanese restaurant with exceptional omakase.",
        address: "513 World Way, Downtown",
        tags: ["Japanese", "Fine Dining", "Dinner"]
    },
    {
        id: 131,
        name: "Five Star Mexican",
        category: "Mexican",
        rating: 5.0,
        price: 4,
        distance: 0.4,
        description: "Ultimate Mexican fine dining with world-class cuisine.",
        address: "614 World Blvd, Downtown",
        tags: ["Mexican", "Casual", "Dinner"]
    },
    {
        id: 132,
        name: "Five Star Chinese",
        category: "Chinese",
        rating: 5.0,
        price: 4,
        distance: 0.5,
        description: "World-class Chinese restaurant with exceptional quality.",
        address: "715 World Rd, Downtown",
        tags: ["Chinese", "Fine Dining", "Dinner"]
    },
    {
        id: 133,
        name: "Five Star French",
        category: "French",
        rating: 5.0,
        price: 4,
        distance: 0.6,
        description: "Ultimate French fine dining with Michelin-starred chef.",
        address: "816 World St, Downtown",
        tags: ["French", "Fine Dining", "Dinner"]
    },
    {
        id: 134,
        name: "Five Star Indian",
        category: "Indian",
        rating: 5.0,
        price: 4,
        distance: 0.7,
        description: "World-class Indian restaurant with exceptional cuisine.",
        address: "917 World Ave, Downtown",
        tags: ["Indian", "Casual", "Dinner"]
    },
    {
        id: 135,
        name: "Five Star Thai",
        category: "Thai",
        rating: 5.0,
        price: 4,
        distance: 0.8,
        description: "Ultimate Thai fine dining with world-renowned quality.",
        address: "118 World Way, Downtown",
        tags: ["Thai", "Casual", "Dinner"]
    },
    {
        id: 136,
        name: "Five Star Mediterranean",
        category: "Mediterranean",
        rating: 5.0,
        price: 4,
        distance: 0.9,
        description: "World-class Mediterranean restaurant with exceptional service.",
        address: "219 World Blvd, Downtown",
        tags: ["Mediterranean", "Casual", "Dinner"]
    },
    {
        id: 137,
        name: "Seoul Kitchen",
        category: "Korean",
        rating: 4.5,
        price: 2,
        distance: 2.1,
        description: "Authentic Korean BBQ and traditional dishes. Great for groups and family dining.",
        address: "123 Seoul St, Downtown",
        tags: ["Korean", "Family-Friendly", "Dinner"]
    },
    {
        id: 138,
        name: "Kimchi House",
        category: "Korean",
        rating: 4.3,
        price: 1,
        distance: 1.5,
        description: "Affordable Korean food with delicious kimchi and bibimbap. Quick service.",
        address: "234 Kimchi Ave, Downtown",
        tags: ["Korean", "Fast Food", "Lunch"]
    },
    {
        id: 139,
        name: "Korean BBQ Palace",
        category: "Korean",
        rating: 4.7,
        price: 3,
        distance: 2.8,
        description: "Premium Korean BBQ with table-side grilling. High-quality meats and banchan.",
        address: "345 BBQ Way, Midtown",
        tags: ["Korean", "Family-Friendly", "Dinner"]
    },
    {
        id: 140,
        name: "Seoul Express",
        category: "Korean",
        rating: 3.8,
        price: 1,
        distance: 1.2,
        description: "Fast Korean food with bulgogi and kimbap. Great for lunch on the go.",
        address: "456 Express Blvd, Downtown",
        tags: ["Korean", "Fast Food", "Lunch"]
    },
    {
        id: 141,
        name: "Korean Fine Dining",
        category: "Korean",
        rating: 4.9,
        price: 4,
        distance: 1.8,
        description: "Upscale Korean cuisine with modern presentation. Exceptional service and ambiance.",
        address: "567 Fine Rd, Uptown",
        tags: ["Korean", "Casual", "Dinner"]
    },
    {
        id: 142,
        name: "Bibimbap House",
        category: "Korean",
        rating: 4.2,
        price: 2,
        distance: 2.5,
        description: "Specializing in bibimbap and Korean comfort food. Vegetarian options available.",
        address: "678 Bibimbap St, Midtown",
        tags: ["Korean", "Fast Food", "Lunch"]
    },
    {
        id: 143,
        name: "Korean Breakfast",
        category: "Korean",
        rating: 3.9,
        price: 1,
        distance: 1.7,
        description: "Traditional Korean breakfast with rice, soup, and banchan.",
        address: "789 Breakfast Ave, Downtown",
        tags: ["Korean", "Café", "Breakfast"]
    },
    {
        id: 144,
        name: "Seoul Seafood",
        category: "Korean",
        rating: 4.4,
        price: 3,
        distance: 3.1,
        description: "Korean seafood dishes with fresh fish and traditional preparations.",
        address: "890 Seafood Way, Waterfront",
        tags: ["Korean", "Casual", "Dinner"]
    },
    {
        id: 145,
        name: "Pho Saigon",
        category: "Vietnamese",
        rating: 4.6,
        price: 2,
        distance: 2.3,
        description: "Authentic Vietnamese pho and banh mi. Fresh ingredients and traditional recipes.",
        address: "123 Saigon St, Downtown",
        tags: ["Vietnamese", "Casual", "Lunch"]
    },
    {
        id: 146,
        name: "Vietnam Express",
        category: "Vietnamese",
        rating: 4.2,
        price: 1,
        distance: 1.4,
        description: "Quick Vietnamese food with pho, banh mi, and spring rolls. Fast service.",
        address: "234 Vietnam Ave, Downtown",
        tags: ["Vietnamese", "Fast Food", "Lunch"]
    },
    {
        id: 147,
        name: "Hanoi House",
        category: "Vietnamese",
        rating: 4.7,
        price: 3,
        distance: 2.8,
        description: "Upscale Vietnamese cuisine with modern presentation. Elegant atmosphere.",
        address: "345 Hanoi Way, Midtown",
        tags: ["Vietnamese", "Fine Dining", "Dinner"]
    },
    {
        id: 148,
        name: "Aladdin's Palace",
        category: "Middle Eastern",
        rating: 4.5,
        price: 2,
        distance: 2.1,
        description: "Authentic Middle Eastern cuisine with kebabs, hummus, and falafel. Great for groups.",
        address: "123 Aladdin St, Downtown",
        tags: ["Middle Eastern", "Family-Friendly", "Dinner"]
    },
    {
        id: 149,
        name: "Mediterranean Grill",
        category: "Middle Eastern",
        rating: 4.3,
        price: 2,
        distance: 1.8,
        description: "Middle Eastern and Mediterranean dishes. Casual dining with fresh ingredients.",
        address: "234 Grill Ave, Downtown",
        tags: ["Middle Eastern", "Casual", "Lunch"]
    },
    {
        id: 150,
        name: "Istanbul Fine Dining",
        category: "Middle Eastern",
        rating: 4.9,
        price: 4,
        distance: 1.5,
        description: "Premium Middle Eastern cuisine with Turkish and Lebanese specialties. Elegant setting.",
        address: "345 Istanbul Blvd, Uptown",
        tags: ["Middle Eastern", "Fine Dining", "Dinner"]
    },
    {
        id: 151,
        name: "Southwest Kitchen",
        category: "Mexican",
        rating: 4.2,
        price: 1,
        distance: 1.8,
        description: "Fast Mexican food with tacos, burritos, and quesadillas. Quick service and affordable prices. Open late for dinner.",
        address: "456 Taco Blvd, Downtown",
        tags: ["Mexican", "Fast Food", "Dinner"]
    },
    {
        id: 152,
        name: "Casa Verde",
        category: "Mexican",
        rating: 4.5,
        price: 2,
        distance: 2.4,
        description: "Fast-casual Mexican restaurant with fresh ingredients. Great burritos, tacos, and bowls. Perfect for a quick dinner.",
        address: "567 Burrito Way, Midtown",
        tags: ["Mexican", "Fast Food", "Dinner"]
    },
    {
        id: 153,
        name: "The Corner Kitchen",
        category: "Mexican",
        rating: 3.8,
        price: 1,
        distance: 1.5,
        description: "Fast Mexican street food with authentic flavors. Quick service and great value. Open for dinner until late.",
        address: "678 Quick St, Downtown",
        tags: ["Mexican", "Fast Food", "Dinner"]
    },
    {
        id: 154,
        name: "Garden Bistro",
        category: "Indian",
        rating: 4.3,
        price: 2,
        distance: 2.1,
        description: "Family-friendly Indian restaurant open late. Authentic curries and tandoori dishes. Great for families and groups. Open until midnight.",
        address: "789 Spice Garden Way, Midtown",
        tags: ["Indian", "Family-Friendly", "Late Night"]
    },
    {
        id: 155,
        name: "The Spice Route",
        category: "Indian",
        rating: 4.6,
        price: 2,
        distance: 1.9,
        description: "Family-oriented Indian restaurant with late-night hours. Traditional dishes and vegetarian options. Perfect for family dinners. Open until 1 AM.",
        address: "890 Curry House Blvd, Downtown",
        tags: ["Indian", "Family-Friendly", "Late Night"]
    }
];

// Tag categories for each business type
const tagCategories = {
    restaurants: {
        'Cuisine': ['American', 'Mexican', 'Italian', 'Chinese', 'Japanese', 'Korean', 'Thai', 'Indian', 'Vietnamese', 'Mediterranean', 'French', 'Middle Eastern'],
        'Restaurant Style': ['Casual', 'Fast Food', 'Café', 'Family-Friendly', 'Fine Dining', 'Bar'],
        'Meal Type': ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Late Night']
    }
};

let currentCategory = 'restaurants';
let selectedPrices = [];
let minRating = 1;
let maxDistance = 20;
let selectedTags = {};

function getCurrentData() {
    return restaurants;
}

function getAvailableTags() {
    const data = getCurrentData();
    const allTags = new Set();
    data.forEach(item => {
        item.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
}

function init() {
    let selectedPriceLevel = null;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            selectedTags = {};
            document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('selected'));
            selectedPriceLevel = null;
            updateTags();
            applyFilters();
        });
    });
    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const priceLevel = parseInt(btn.dataset.price);
            const isCurrentlySelected = btn.classList.contains('selected') && selectedPriceLevel === priceLevel;
            
            if (isCurrentlySelected) {
                document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('selected'));
                selectedPriceLevel = null;
            } else {
                document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('selected'));
                selectedPriceLevel = priceLevel;
                document.querySelectorAll('.price-btn').forEach(b => {
                    if (parseInt(b.dataset.price) <= priceLevel) {
                        b.classList.add('selected');
                    }
                });
            }
            applyFilters();
        });
    });

    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const ratingLabels = document.querySelectorAll('input[name="rating"] + label');
    
    function updateStarHighlighting(selectedValue) {
        ratingLabels.forEach(label => label.classList.remove('highlighted'));
        
        if (!selectedValue || selectedValue === 0) {
            return;
        }
        
        ratingInputs.forEach((input, index) => {
            if (parseInt(input.value) <= parseInt(selectedValue)) {
                ratingLabels[index].classList.add('highlighted');
            }
        });
    }
    
    let lastSelectedRating = null;
    let isProcessingClick = false;
    
    ratingLabels.forEach((label, index) => {
        label.addEventListener('mousedown', (e) => {
            if (isProcessingClick) return;
            
            const radio = ratingInputs[index];
            if (radio.checked && lastSelectedRating === radio.value) {
                isProcessingClick = true;
                e.preventDefault();
                e.stopPropagation();
                radio.checked = false;
                lastSelectedRating = null;
                updateStarHighlighting(0);
                requestAnimationFrame(() => {
                    applyFilters();
                    isProcessingClick = false;
                });
                return false;
            }
        });
    });
    
    ratingInputs.forEach(radio => {
        radio.addEventListener('change', () => {
            if (isProcessingClick) return;
            
            if (radio.checked) {
                lastSelectedRating = radio.value;
                updateStarHighlighting(radio.value);
            } else {
                lastSelectedRating = null;
                updateStarHighlighting(0);
            }
            applyFilters();
        });
    });
    
    ratingLabels.forEach((label, index) => {
        label.addEventListener('mouseenter', () => {
            const hoverValue = ratingInputs[index].value;
            ratingLabels.forEach((l, i) => {
                const svg = l.querySelector('svg');
                if (svg) {
                    if (parseInt(ratingInputs[i].value) <= parseInt(hoverValue)) {
                        svg.style.fill = '#ff9e0b';
                        svg.style.filter = 'drop-shadow(0 0 15px rgba(255, 158, 11, 0.9))';
                    } else {
                        svg.style.fill = '#666';
                        svg.style.filter = '';
                    }
                }
            });
        });
        
        label.addEventListener('mouseleave', () => {
            ratingLabels.forEach(l => {
                const svg = l.querySelector('svg');
                if (svg) {
                    svg.style.fill = '';
                    svg.style.filter = '';
                }
            });
            const selectedRadio = document.querySelector('input[name="rating"]:checked');
            if (selectedRadio) {
                updateStarHighlighting(selectedRadio.value);
            }
        });
    });
    
    updateStarHighlighting(0);

    const distanceSlider = document.getElementById('distance');
    const distanceValue = document.getElementById('distance-value');
    
    distanceSlider.addEventListener('input', (e) => {
        distanceValue.textContent = e.target.value;
    });

    document.getElementById('apply-filters').addEventListener('click', applyFilters);

    updateTags();
    applyFilters();
}

function getFilteredTags() {
    const data = getCurrentData();
    const availableTags = new Set();
    
    data.forEach(item => {
        item.tags.forEach(tag => availableTags.add(tag));
    });
    
    return Array.from(availableTags).sort();
}

function updateTags() {
    const tagsContainer = document.getElementById('tags-container');
    if (!tagsContainer) return;
    
    tagsContainer.innerHTML = '';
    
    const categories = tagCategories[currentCategory];
    if (!categories) return;
    
    Object.keys(categories).forEach(categoryName => {
        const categoryGroup = document.createElement('div');
        categoryGroup.className = 'tag-category-group';
        
        const categoryLabel = document.createElement('label');
        categoryLabel.className = 'tag-category-label';
        categoryLabel.textContent = categoryName + ':';
        categoryGroup.appendChild(categoryLabel);
        
        const categoryTagsContainer = document.createElement('div');
        categoryTagsContainer.className = 'category-tags';
        
        const categoryTags = categories[categoryName];
        
        categoryTags.forEach(tag => {
            const tagBtn = document.createElement('button');
            tagBtn.className = 'tag-btn';
            tagBtn.textContent = tag;
            tagBtn.dataset.category = categoryName;
            tagBtn.dataset.tag = tag;
            
            if (selectedTags[categoryName] === tag) {
                tagBtn.classList.add('selected');
            }
            
            tagBtn.addEventListener('click', () => {
                if (selectedTags[categoryName] === tag) {
                    delete selectedTags[categoryName];
                    tagBtn.classList.remove('selected');
                } else {
                    categoryTagsContainer.querySelectorAll('.tag-btn').forEach(btn => {
                        btn.classList.remove('selected');
                    });
                    selectedTags[categoryName] = tag;
                    tagBtn.classList.add('selected');
                }
            });
            
            categoryTagsContainer.appendChild(tagBtn);
        });
        
        categoryGroup.appendChild(categoryTagsContainer);
        tagsContainer.appendChild(categoryGroup);
    });
}

function applyFilters() {
    const selectedPriceBtns = document.querySelectorAll('.price-btn.selected');
    let maxSelectedPrice = null;
    selectedPriceBtns.forEach(btn => {
        const price = parseInt(btn.dataset.price);
        if (maxSelectedPrice === null || price > maxSelectedPrice) {
            maxSelectedPrice = price;
        }
    });

    const selectedRating = document.querySelector('input[name="rating"]:checked');
    minRating = selectedRating ? parseFloat(selectedRating.value) : 0;
    maxDistance = parseFloat(document.getElementById('distance').value);

    updateTags();

    const data = getCurrentData();
    let filtered = data.filter(item => {
        if (maxSelectedPrice !== null && item.price > maxSelectedPrice) {
            return false;
        }

        if (minRating > 0 && item.rating < minRating) {
            return false;
        }

        if (item.distance > maxDistance) {
            return false;
        }

        const selectedTagValues = Object.values(selectedTags);
        if (selectedTagValues.length > 0) {
            const hasAllSelectedTags = selectedTagValues.every(tag => item.tags.includes(tag));
            if (!hasAllSelectedTags) {
                return false;
            }
        }

        return true;
    });

    displayResults(filtered);
}

function displayResults(results) {
    const container = document.getElementById('results-container');
    const emptyState = document.getElementById('empty-state');
    
    container.innerHTML = '';
    
    if (results.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        const priceIndicator = '$'.repeat(item.price);
        
        const fullStars = Math.floor(item.rating);
        const hasHalfStar = item.rating % 1 >= 0.5;
        const stars = '★'.repeat(fullStars) + (hasHalfStar ? '½' : '');
        
        const tagsHTML = item.tags.map(tag => 
            `<span class="card-tag">${tag}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <div class="card-title">${item.name}</div>
                    <div class="card-category">${item.category}</div>
                </div>
                <div class="card-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-value">${item.rating.toFixed(1)}</span>
                </div>
            </div>
            <div class="card-info">
                <div class="card-info-item">
                    <span class="price-indicator">${priceIndicator}</span>
                </div>
                <div class="card-info-item">
                    <span class="distance-indicator">📍 ${item.distance} miles</span>
                </div>
            </div>
            <div class="card-description">${item.description}</div>
            <div class="card-address">📍 ${item.address}</div>
            <div class="card-tags">${tagsHTML}</div>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', init);
