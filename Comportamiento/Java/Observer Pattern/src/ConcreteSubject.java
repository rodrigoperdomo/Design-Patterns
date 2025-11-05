import java.util.ArrayList;
import java.util.List;

public class ConcreteSubject implements ISubject{
    public String latestNews;
    public List<IObserver> suscribers = new ArrayList();

    public ConcreteSubject(String latestNews) {
        this.latestNews = latestNews;
    }

    @Override
    public void suscribe(IObserver observer) {
        suscribers.add(observer);
    }

    @Override
    public void unsuscribe(IObserver observer) {
        suscribers.remove(observer);
    }

    @Override
    public void notifyObserver() {
        for(IObserver observer : suscribers){
            observer.update(latestNews);
        }
    }
}
