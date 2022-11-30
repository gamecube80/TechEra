package tda.darkarmy.restaurantservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tda.darkarmy.restaurantservice.model.Restaurant;
import tda.darkarmy.restaurantservice.service.RestaurantService;

import static org.springframework.http.ResponseEntity.status;

@RequestMapping("/restaurants")
@RestController
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return status(200).body(restaurantService.findAll());
    }

    @GetMapping("/by-id/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        return status(200).body(restaurantService.findById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Restaurant restaurant){
        return status(200).body(restaurantService.create(restaurant));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody Restaurant restaurant){
        return status(200).body(restaurantService.update(id, restaurant));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        return status(200).body(restaurantService.delete(id));
    }
}
