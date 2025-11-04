public class CineFacade {
    public Pantalla pantalla;
    public Proyector proyector;
    public Sonido sonido;

    public CineFacade(){
        this.pantalla = new Pantalla();
        this.proyector = new Proyector();
        this.sonido = new Sonido();
    }

    public void arrancarPelicula(){
        this.pantalla.bajar();
        this.sonido.escender();
        this.proyector.escender();
        System.out.println("Mostrando pelicula");
    }

    public void terminarPelicula(){
        this.sonido.apagar();
        this.proyector.apagar();
        this.pantalla.subir();
        System.out.println("Finalizo la pelicula");
    }
}
