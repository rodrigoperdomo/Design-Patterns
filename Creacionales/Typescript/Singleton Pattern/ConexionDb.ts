export class ConexionDb{
    
    public static instancia:ConexionDb;
    
    consturctor(){
        console.log("Conexión establecida");
    }

    static getInstancia():ConexionDb{
        if(ConexionDb.instancia==null){
            ConexionDb.instancia=new ConexionDb();
        }
        return ConexionDb.instancia;
    }

    ejecutarQuery(sql:string):void{
        console.log("Ejecutando query: "+sql);
    }
    
}