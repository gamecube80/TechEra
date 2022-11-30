
package tda.darkarmy.foodservice.VO;

public class Restaurant {
    private Long id;
    private String name;
    private String location;
    private String cuisine;
    private double budget;

    public Restaurant() {
    }

    public Restaurant(Long id, String name, String location, String cuisine, double budget) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.cuisine = cuisine;
        this.budget = budget;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }
}
