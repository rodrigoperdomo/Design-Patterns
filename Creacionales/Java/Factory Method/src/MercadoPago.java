public class MercadoPago implements IPagos {
    @Override
    public void metodoPagar() {
        System.out.println("Estoy pagando con Mercado Pago");
    }

    @Override
    public void pagar() {
        System.out.println("Estoy pagando");
        this.metodoPagar();
    }
}
