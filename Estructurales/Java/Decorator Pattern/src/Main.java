public class Main {
    public static void main(String[] args) {

        //Simple
        ICafe cafe = new CafeSimple();
        System.out.println(cafe.getDescripcion());
        System.out.println(cafe.getCoste());

        //Agrego leche
        cafe = new CafeConLeche(cafe);
        System.out.println(cafe.getDescripcion());
        System.out.println(cafe.getCoste());

        //Agrego azucar
        cafe = new CafeConAzucar(cafe);
        System.out.println(cafe.getDescripcion());
        System.out.println(cafe.getCoste());
    }
}