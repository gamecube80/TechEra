package tda.darkarmy.foodservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tda.darkarmy.foodservice.model.FoodItem;
import tda.darkarmy.foodservice.service.FoodItemService;

import static org.springframework.http.ResponseEntity.status;

@RequestMapping("/foodItems")
@RestController
public class FoodItemController {
    @Autowired
    private FoodItemService foodItemservice;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return status(200).body(foodItemservice.findAll());
    }

    @GetMapping("/all-food-with-restaurant")
    public ResponseEntity<?> getAllFoodWithRestaurant(){
        return status(200).body(foodItemservice.findAllFoodWithRestaurant());
    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        return status(200).body(foodItemservice.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody FoodItem foodItem){
        return status(200).body(foodItemservice.create(foodItem));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody FoodItem foodItem){
        return status(200).body(foodItemservice.update(id, foodItem));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        return status(200).body(foodItemservice.delete(id));
    }
}
