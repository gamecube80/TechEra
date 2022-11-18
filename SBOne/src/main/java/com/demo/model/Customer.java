package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Customer {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int custNo;
	private String name;
	private String address;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Customer(int custNo, String name, String address) {
		super();
		this.custNo = custNo;
		this.name = name;
		this.address = address;
	}


	public int getCustNo() {
		return custNo;
	}

	public void setCustNo(int custNo) {
		this.custNo = custNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Customer [custNo=" + custNo + ", name=" + name + ", address=" + address + "]";
	}

}
