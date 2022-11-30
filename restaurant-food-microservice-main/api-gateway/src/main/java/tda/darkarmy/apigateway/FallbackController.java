package tda.darkarmy.apigateway;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.http.ResponseEntity.status;

@RestController
public class FallbackController {

    @GetMapping("/restaurantServiceFallbackController")
    public ResponseEntity<?> restaurantServiceFallbackController(){
        return status(500).body("Restaurant Service is down");
    }

    @GetMapping("/foodItemServiceFallbackController")
    public ResponseEntity<?> foodItemServiceFallbackController(){
        return status(500).body("Food Item Service is down");
    }
}