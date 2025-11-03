import java.time.LocalDateTime;
public class Main {

    public static void main(String[] args) {
        Usuarios usuarios = new Usuarios.Builder()
                .setUsername("rodriper")
                .setPassword("password")
                .setFechaCreacion(LocalDateTime.now())
                .setUserImage("ruta a la imagen")
                .build();

        System.out.println(usuarios.toString());

    }
}