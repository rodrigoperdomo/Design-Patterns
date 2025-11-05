public class PayPalPayment implements IPaymentStrategy{
    @Override
    public void pay(double amount) {
        System.out.println("Pagando $" + amount + " con PayPal.");
    }
}
