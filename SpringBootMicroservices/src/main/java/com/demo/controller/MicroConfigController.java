package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.config.Configuration;
import com.demo.model.MS;
import com.demo.model.MS1;

@RestController
public class MicroConfigController {

	@Autowired
	private Configuration config;

	@GetMapping("/micro")
	public MS MSController() {
		//return new MS(500,1);
		return new MS(config.getMax(), config.getMin());
	}
	
	@GetMapping("/micro1")
	public MS1 MSController1() {
		//return new MS(500,1);
		return new MS1(config.getMax(), config.getMin());
	}
	
}
