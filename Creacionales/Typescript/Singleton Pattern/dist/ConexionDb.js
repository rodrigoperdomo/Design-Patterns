"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConexionDb = void 0;
class ConexionDb {
    consturctor() {
        console.log("Conexión establecida");
    }
    static getInstancia() {
        if (ConexionDb.instancia == null) {
            ConexionDb.instancia = new ConexionDb();
        }
        return ConexionDb.instancia;
    }
    ejecutarQuery(sql) {
        console.log("Ejecutando query: " + sql);
    }
}
exports.ConexionDb = ConexionDb;
//# sourceMappingURL=ConexionDb.js.map