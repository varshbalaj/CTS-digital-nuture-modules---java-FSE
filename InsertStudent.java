import java.sql.*;

public class InsertStudent {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "Varshini@06");

            String query = "INSERT INTO students VALUES(4,'Varshini')";

            Statement stmt = con.createStatement();
            int rows = stmt.executeUpdate(query);

            System.out.println(rows + " record inserted.");

            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}