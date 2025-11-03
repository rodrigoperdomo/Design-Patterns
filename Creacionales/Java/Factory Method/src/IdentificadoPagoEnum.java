public enum IdentificadoPagoEnum {

    MERCADO_PAGO("Mercado_PAGO"),
    CREDIT_CARD("CreditCard");

    public String identificadorPago;

    IdentificadoPagoEnum(String identificadorPago){
        this.identificadorPago=identificadorPago;
    }
}
