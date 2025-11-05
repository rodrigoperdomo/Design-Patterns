public class ConcreteObserver implements IObserver{

    public String name;

    public ConcreteObserver(String name) {
        this.name = name;
    }

    @Override
    public void update(String news) {
        System.out.println(name+" recibió la siguiente noticia: "+news);
    }
}
