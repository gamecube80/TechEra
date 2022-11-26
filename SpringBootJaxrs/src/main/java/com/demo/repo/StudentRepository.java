package com.demo.repo;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.demo.model.Student;

@Repository
public class StudentRepository {

	Map<Long, Student> student = new HashMap<>();
	
	@PostConstruct
	public void init() {
		
		student.put((long) 1,  new Student(1,"Dan","Hoelzel"));
		student.put((long) 2,  new Student(2,"Zach","Colford"));
		student.put((long) 3,  new Student(3,"Drew","Owen"));
	}
	
	public Collection<Student> findAll(){
		return student.values();
	}
	
	public Optional<Student> findById(Long id){
		Student a = null;
		if(student.containsKey(id)) a student = (Map<Long, Student>) student.get(id);
		return Optional.ofNullable(a);
	}
}
