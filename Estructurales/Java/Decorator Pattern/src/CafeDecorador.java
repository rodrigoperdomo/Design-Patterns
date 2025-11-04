public class CafeDecorador implements ICafe{

    protected ICafe cafeSimple;

    public CafeDecorador(ICafe cafeSimple){
        this.cafeSimple = cafeSimple;
    }

    @Override
    public String getDescripcion() {
        return cafeSimple.getDescripcion();
    }

    @Override
    public double getCoste() {
        return cafeSimple.getCoste();
    }
}
