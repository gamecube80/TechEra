package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.model.Customer;
import com.demo.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repository;
	
	public List<Customer> getAll(){
		List<Customer> cust = repository.findAll();
		System.out.println(cust);
		return repository.findAll()
;	}
	
	public Customer addCustomer(Customer customer) {
		return repository.save(customer);
	}
	
}
