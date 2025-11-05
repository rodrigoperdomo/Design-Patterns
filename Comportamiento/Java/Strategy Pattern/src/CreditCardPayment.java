public class CreditCardPayment implements IPaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Pagando $" + amount + " con tarjeta de crédito.");
    }
}
