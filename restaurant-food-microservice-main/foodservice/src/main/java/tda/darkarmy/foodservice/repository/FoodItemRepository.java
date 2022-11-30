package tda.darkarmy.foodservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tda.darkarmy.foodservice.model.FoodItem;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

}
