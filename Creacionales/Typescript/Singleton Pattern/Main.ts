import { ConexionDb } from "./ConexionDb";

const conexionMysql1 = ConexionDb.getInstancia();
const conexionMysql2 = ConexionDb.getInstancia();

if(conexionMysql1 === conexionMysql2){
    console.log("Las dos conexiones son la misma instancia");
}

conexionMysql1.ejecutarQuery("SELECT * FROM usuarios");
conexionMysql2.ejecutarQuery("SELECT * FROM productos");