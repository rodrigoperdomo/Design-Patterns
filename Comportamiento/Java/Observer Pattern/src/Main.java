public class Main {
    public static void main(String[] args) {
        IObserver observer = new ConcreteObserver("Brenda");
        IObserver observer1 = new ConcreteObserver("Gloria");

        ISubject youtube = new ConcreteSubject("Se abandona canal");
        youtube.suscribe(observer);
        youtube.suscribe(observer1);
        youtube.notifyObserver();

        youtube.unsuscribe(observer);
        youtube.unsuscribe(observer1);
    }
}