public class PaymentContext {
    private IPaymentStrategy strategy;

    // El cliente puede cambiar la estrategia en tiempo de ejecución
    public void setPaymentStrategy(IPaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void pay(double amount) {
        if (strategy == null) {
            System.out.println("No se ha seleccionado una estrategia de pago.");
        } else {
            strategy.pay(amount);
        }
    }
}
