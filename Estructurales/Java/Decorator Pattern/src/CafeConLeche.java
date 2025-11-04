public class CafeConLeche extends CafeDecorador{

    public CafeConLeche(ICafe cafe){
        super(cafe);
    }

   @Override
    public String getDescripcion(){
        return "Cafe Con Leche";
    }

    @Override
    public double getCoste(){
        return 160.10;
    }

}
