package student_management;

public class Student {

	private String studentID;
	private String name;
	private String grade;
	private String address;
	
	public String getStudentID() {
		return studentID;
	}
	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public Student(String id, String name, String grade, String address) {
		super();
		this.studentID = id;
		this.name = name;
		this.grade = grade;
		this.address = address;
	}
	
}
