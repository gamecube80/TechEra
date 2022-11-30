package tda.darkarmy.foodservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FoodItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long restaurantId;
    private String name;
    private double price;

    public FoodItem() {
    }

    public FoodItem(Long id, Long restaurantId, String name, double price) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.name = name;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "FoodItem{" +
                "id=" + id +
                ", restaurantId=" + restaurantId +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
