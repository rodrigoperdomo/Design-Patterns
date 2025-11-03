public class FactoryMethod {
    public static IPagos crearPagos(IdentificadoPagoEnum identificadoPagoEnum){
        switch (identificadoPagoEnum){
            case IdentificadoPagoEnum.MERCADO_PAGO:
                return new MercadoPago();
            case IdentificadoPagoEnum.CREDIT_CARD:
                return new CreditCar();
            default:
                System.out.println("No es un tipo de identificador aceptado");
                break;
        }
        return null;
    }
}
