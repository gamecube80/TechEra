package student_management;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionPackage {

	static Connection connection;
	
	public static  Connection createConnection() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String url = "jdbc:mysql://localhost:3306/techera";
			String user = "root";
			String password = "asdf123";
			
			connection = DriverManager.getConnection(url,user,password);
		}
		catch (Exception e) {
			e.printStackTrace();
			connection = null;
		}
		
		return connection;
	}
}
