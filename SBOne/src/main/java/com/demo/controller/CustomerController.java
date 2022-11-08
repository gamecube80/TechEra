package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Customer;
import com.demo.service.CustomerService;

import static org.springframework.http.ResponseEntity.status;

@RestController
@RequestMapping("/cust")
public class CustomerController {

	@Autowired
	private CustomerService service;

	@GetMapping("/checks")
	public String gello() {
		return "Hello Techera";
	}

	@GetMapping("/findAll")
	private List<Customer> getAll() {
		return service.getAll();
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		return status(200).body(service.addCustomer(customer));
	}
	
	//@PutMapping("/update")
	//TODO get update
	
	//@DeleteMapping("/delete")
	//TODO finish delete
	
}
