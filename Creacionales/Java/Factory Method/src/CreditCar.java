public class CreditCar implements IPagos{
    @Override
    public void metodoPagar() {
        System.out.println("Estoy pagando con tarjeta de credito");
    }

    @Override
    public void pagar() {
        System.out.println("Estoy pagando");
        this.metodoPagar();
    }
}
