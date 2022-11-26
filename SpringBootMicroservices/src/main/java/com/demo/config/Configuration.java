package com.demo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("spring-boot-microservice")
public class Configuration {

	private int max;
	private int min;

	public Configuration(int max, int min) {
		super();
		this.max = max;
		this.min = min;
	}

	public Configuration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getMax() {
		return max;
	}

	public void setMax(int max) {
		this.max = max;
	}

	public int getMin() {
		return min;
	}

	public void setMin(int min) {
		this.min = min;
	}

}
