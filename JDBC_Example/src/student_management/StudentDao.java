package student_management;

import java.sql.*;

public class StudentDao {

	public static boolean insertStudentToDB(Student student) {

		boolean f = false;

		try {
			Connection connection = ConnectionPackage.createConnection();

			String query = "insert into student(studentID, name, grade, address) values(?,?,?,?)";
			PreparedStatement p = connection.prepareStatement(query);
			p.setString(1, student.getStudentID());
			p.setString(2, student.getName());
			p.setString(3, student.getGrade());
			p.setString(4, student.getAddress());

			p.executeUpdate();
			f = true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;
	}

	public static boolean deleteStudentFromDB(String id) {

		boolean f = false;

		try {
			Connection connection = ConnectionPackage.createConnection();

			String query = "delete from student where studentID = ?";
			PreparedStatement p = connection.prepareStatement(query);
			p.setString(1, id);

			int rowsDeleted = p.executeUpdate();
			if (rowsDeleted > 0) {
				System.out.println("A user was successfully deleted");
				f = true;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;
	}

	public static boolean selectStudentFromDB() {

		boolean f = false;

		try {
			Connection connection = ConnectionPackage.createConnection();

			String query = "Select * from student";
			PreparedStatement p = connection.prepareStatement(query);
			
			// TODO get output for
			ResultSet result = p.executeQuery(query);
			 
			int count = 0;
			 
			while (result.next()){
			    String studentID = result.getString(1);
			    String name = result.getString(2);
			    String grade = result.getString(3);
			    String address = result.getString(4);
			 
			    String output = "User #%d: %s - %s - %s - %s";
			    System.out.println(String.format(output, ++count, studentID, name, grade, address));
			}

			f = true;

		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;
	}

	public static boolean updateStudentFromDB(String id, Student student) {

		boolean f = false;

		try {
			Connection connection = ConnectionPackage.createConnection();

			String query = "Update student set studentID = ?, Name = ?, grade = ?, address = ? where studentID = ?";
			PreparedStatement p = connection.prepareStatement(query);
			p.setString(5, id);
			p.setString(1, student.getStudentID());
			p.setString(2, student.getName());
			p.setString(3, student.getGrade());
			p.setString(4, student.getAddress());

			p.executeUpdate();

			System.out.println("User Successfully updated");
			f = true;

		} catch (Exception e) {
			e.printStackTrace();
		}

		return f;

	}

}
