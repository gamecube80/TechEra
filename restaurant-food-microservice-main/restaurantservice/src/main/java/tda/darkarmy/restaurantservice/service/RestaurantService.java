package tda.darkarmy.restaurantservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tda.darkarmy.restaurantservice.model.Restaurant;
import tda.darkarmy.restaurantservice.repository.RestaurantRepository;

import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> findAll(){
      return restaurantRepository.findAll();
    }

    public Restaurant findById(Long id){
        return restaurantRepository.findById(id).orElseThrow(()-> new RuntimeException("Restaurant not found"));
    }

    public Restaurant create(Restaurant restaurant){
        return restaurantRepository.save(restaurant);
    }

    public Restaurant update(Long id, Restaurant restaurant){
        Restaurant restaurant1 = restaurantRepository.findById(id).orElseThrow(()-> new RuntimeException("Restaurant not found"));
        restaurant.setId(id);
        return restaurantRepository.save(restaurant);
    }

    public String delete(Long id){
        Restaurant restaurant1 = restaurantRepository.findById(id).orElseThrow(()-> new RuntimeException("Restaurant not found"));
        restaurantRepository.deleteById(id);
        return "Restaurant deleted successfully";
    }

}
