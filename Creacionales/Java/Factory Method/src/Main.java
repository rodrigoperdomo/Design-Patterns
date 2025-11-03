//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        IPagos mercadoPago = FactoryMethod.crearPagos(IdentificadoPagoEnum.MERCADO_PAGO);
        mercadoPago.pagar();
        IPagos pagoCreditCard=FactoryMethod.crearPagos(IdentificadoPagoEnum.CREDIT_CARD);
        pagoCreditCard.pagar();
    }
}