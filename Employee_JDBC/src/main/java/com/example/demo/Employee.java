package com.example.demo;

public class Employee {
	
	private int id;
	private String firstName;
	private String lastName;
	private int age;
	private String emailAdress;
	private int days_worked;
	private int salary;
	private int bonus;
	
	public Employee() {
		
	}

	public Employee(int id, String firstName, String lastName, int age, String emailAdress, int days_worked, int salary,
			int bonus) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.emailAdress = emailAdress;
		this.days_worked = days_worked;
		this.salary = salary;
		this.bonus = bonus;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmailAdress() {
		return emailAdress;
	}

	public void setEmailAdress(String emailAdress) {
		this.emailAdress = emailAdress;
	}

	public int getDays_worked() {
		return days_worked;
	}

	public void setDays_worked(int days_worked) {
		this.days_worked = days_worked;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public int getBonus() {
		return bonus;
	}

	public void setBonus(int bonus) {
		this.bonus = bonus;
	}
	
}