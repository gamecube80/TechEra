package student_management;

import java.io.*;

public class Main {

	public static void main(String[] args) throws IOException {

		// Student student = new Student(1, "Dan", 12, "Menasha");

		System.out.println("Welcome to Student Management System!");

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		while (true) {
			System.out.println("press 1 to Add student");
			System.out.println("press 2 to Delete Student");
			System.out.println("press 3 to Display Students");
			System.out.println("press 4 to Update Student");
			System.out.println("press 5 to Exit Student Management System");

			int c = Integer.parseInt(br.readLine());

			System.out.println("You have entered: " + c);

			switch (c) {

			case 1: {
				System.out.println("Enter the Student id: ");
				String id = br.readLine();

				System.out.println("Enter the Student name: ");
				String name = br.readLine();

				System.out.println("Enter the Student grade: ");
				String grade = br.readLine();

				System.out.println("Enter the Student address: ");
				String address = br.readLine();

				Student student = new Student(id, name, grade, address);
				boolean result = StudentDao.insertStudentToDB(student);

				if (result) {
					System.out.println("Successfully inserted\n");
				} else {
					System.out.println("Something went wrong\n");
				}
				break;
			}
			
			case 2: {
				System.out.println("enter the id to delete: ");
				String id = br.readLine();
				
				boolean result = StudentDao.deleteStudentFromDB(id);
				
				if (result) {
					System.out.println("Successfully Deleted\n");
				} else {
					System.out.println("Something went wrong\n");
				}
				break;
			}
			
			case 3: {
				System.out.println("Display Database: ");
				
				boolean result = StudentDao.selectStudentFromDB();
				
				if (result) {
					System.out.println("Successfully selected\n");
				} else {
					System.out.println("Something went wrong\n");
				}
				break;
			}
			
			case 4: {
				System.out.println("Enter the Student id to update: ");
				String id = br.readLine();
				
				System.out.println("Enter the new StudentID");
				String newId = br.readLine();

				System.out.println("Enter the new Student name: ");
				String name = br.readLine();

				System.out.println("Enter the new Student grade: ");
				String grade = br.readLine();

				System.out.println("Enter the new Student address: ");
				String address = br.readLine();

				Student student = new Student(newId, name, grade, address);
				boolean result = StudentDao.updateStudentFromDB(id, student);

				if (result) {
					System.out.println("Successfully Updated\n");
				} else {
					System.out.println("Something went wrong\n");
				}
				break;
			}

			case 5: {
				System.out.println("Exiting now");
				System.exit(0);
				break;
			}

			default:
				throw new IllegalArgumentException("Unexpected value: " + c);
			}
			
		}

	}

}
