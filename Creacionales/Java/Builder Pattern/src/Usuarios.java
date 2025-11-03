import java.time.LocalDate;
import java.time.LocalDateTime;

public class Usuarios {
    private String username;
    private String password;
    private LocalDateTime fechaCreacion;
    private String userImage;

    public Usuarios(Builder builder){
        this.username =builder.username;
        this.password=builder.password;
        this.fechaCreacion=builder.fechaCreacion;
        this.userImage= builder.userImage;
    }

    public static class Builder {
        private String username;
        private String password;
        private LocalDateTime fechaCreacion;
        private String userImage;

        public Builder setUsername(String username) {
            this.username = username;
            return this;
        }

        public Builder setPassword(String password){
            this.password=password;
            return this;
        }

        public Builder setFechaCreacion(LocalDateTime fechaCreacion) {
            this.fechaCreacion = fechaCreacion;
            return this;
        }

        public Builder setUserImage(String userImage) {
            this.userImage = userImage;
            return this;
        }

        public Usuarios build(){
            return new Usuarios(this);
        }
    }
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public String getUserImage() {
        return userImage;
    }

    @Override
    public String toString() {
        return "Builder{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", fechaCreacion=" + fechaCreacion +
                ", userImage='" + userImage + '\'' +
                '}';
    }
}
