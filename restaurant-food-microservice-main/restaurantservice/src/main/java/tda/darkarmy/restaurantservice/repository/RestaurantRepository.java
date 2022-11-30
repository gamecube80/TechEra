package tda.darkarmy.restaurantservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tda.darkarmy.restaurantservice.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

}
