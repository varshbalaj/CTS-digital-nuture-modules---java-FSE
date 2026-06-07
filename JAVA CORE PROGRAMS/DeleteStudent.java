import java.sql.*;

public class DeleteStudent {
    public static void main(String[] args) {

        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "Varshini@06");

            String query =
                    "DELETE FROM students WHERE id=4";

            Statement stmt = con.createStatement();

            int rows = stmt.executeUpdate(query);

            System.out.println(rows + " record deleted.");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}