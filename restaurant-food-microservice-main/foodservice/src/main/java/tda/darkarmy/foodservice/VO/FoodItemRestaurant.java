package tda.darkarmy.foodservice.VO;

public class FoodItemRestaurant {
    private Long foodItemId;
    private String foodName;
    private double foodPrice;
    private Restaurant Restaurant;

    public FoodItemRestaurant() {
    }

    public FoodItemRestaurant(Long foodItemId, String foodName, double foodPrice, tda.darkarmy.foodservice.VO.Restaurant restaurant) {
        this.foodItemId = foodItemId;
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        Restaurant = restaurant;
    }

    public Long getFoodItemId() {
        return foodItemId;
    }

    public void setFoodItemId(Long foodItemId) {
        this.foodItemId = foodItemId;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public double getFoodPrice() {
        return foodPrice;
    }

    public void setFoodPrice(double foodPrice) {
        this.foodPrice = foodPrice;
    }

    public tda.darkarmy.foodservice.VO.Restaurant getRestaurant() {
        return Restaurant;
    }

    public void setRestaurant(tda.darkarmy.foodservice.VO.Restaurant restaurant) {
        Restaurant = restaurant;
    }
}
