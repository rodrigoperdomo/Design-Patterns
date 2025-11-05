public interface ISubject {
    void suscribe(IObserver observer);
    void unsuscribe(IObserver observer);
    void notifyObserver();
}

