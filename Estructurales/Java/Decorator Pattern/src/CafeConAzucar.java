public class CafeConAzucar extends CafeDecorador {

    public CafeConAzucar(ICafe cafe){
        super(cafe);
    }

    @Override
    public String getDescripcion(){
        return "Cafe con Azucar";
    }

    @Override
    public double getCoste(){
        return 170.10;
    }
}
