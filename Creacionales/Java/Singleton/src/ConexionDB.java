public class ConexionDB {

    private static ConexionDB instance;

    private ConexionDB(){}

    public static ConexionDB getConexion(){
        if(instance==null){
            instance = new ConexionDB();
        }
        return instance;
    }

    public void exexcuteQery(String query){
        System.out.println(query);
    }
}
