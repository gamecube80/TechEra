package tda.darkarmy.foodservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tda.darkarmy.foodservice.VO.FoodItemRestaurant;
import tda.darkarmy.foodservice.VO.Restaurant;
import tda.darkarmy.foodservice.model.FoodItem;
import tda.darkarmy.foodservice.repository.FoodItemRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodItemService {
    @Autowired
    private FoodItemRepository foodItemRepository;

    @Autowired
    private RestTemplate restTemplate;

    public List<FoodItem> findAll(){
        return foodItemRepository.findAll();
    }

    public List<FoodItemRestaurant> findAllFoodWithRestaurant(){
        List<FoodItem> foodItemList = foodItemRepository.findAll();
        List<FoodItemRestaurant> foodItemRestaurantList = new ArrayList<>();

        foodItemList.stream().forEach(foodItem -> {
            Restaurant restaurant = restTemplate.getForObject("http://RESTAURANT-SERVICE/restaurants/by-id/"+foodItem.getRestaurantId(), Restaurant.class);
            FoodItemRestaurant foodItemRestaurant = new FoodItemRestaurant();
            foodItemRestaurant.setRestaurant(restaurant);
            foodItemRestaurant.setFoodItemId(foodItem.getId());
            foodItemRestaurant.setFoodName(foodItem.getName());
            foodItemRestaurant.setFoodPrice(foodItem.getPrice());
            foodItemRestaurantList.add(foodItemRestaurant);

            System.out.println("\n\nFoodItemRestaurant: "+ foodItemRestaurant.toString());

        });

        return foodItemRestaurantList;
    }

    public FoodItem findById(Long id){
        return foodItemRepository.findById(id).orElseThrow(()-> new RuntimeException("FoodItem not found"));
    }

    public FoodItem create(FoodItem foodITem){
        return foodItemRepository.save(foodITem);
    }

    public FoodItem update(Long id, FoodItem foodITem){
        FoodItem foodITem1 = foodItemRepository.findById(id).orElseThrow(()-> new RuntimeException("FoodITem not found"));
        foodITem.setId(id);
        return foodItemRepository.save(foodITem);
    }

    public String delete(Long id){
        FoodItem foodITem1 = foodItemRepository.findById(id).orElseThrow(()-> new RuntimeException("FoodITem not found"));
        foodItemRepository.deleteById(id);
        return "FoodITem deleted successfully";
    }

}
