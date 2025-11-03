
public class Main {
    public static void main(String[] args) {
        ConexionDB mysql = ConexionDB.getConexion();
        mysql.exexcuteQery("Select * from usuarios");
        ConexionDB mysql2 = ConexionDB.getConexion();
        mysql2.exexcuteQery("Select * from pagos");
        if (mysql == mysql2) {
            System.out.println("Son la mismas instancias");
        }
    }
}