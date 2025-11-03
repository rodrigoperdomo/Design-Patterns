public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        CreditCard card1 = new CreditCard("Jose Gonzales",1,"123456-1234-1234","345");
        CreditCard card2 = card1.clone();
        card2.setTitular("Ever Perdomo");
        CreditCard card3 = card1.clone();
        card3.setTitular("Gloria Nuñez");

        System.out.println(card1.toString());
        System.out.println(card2.toString());
        System.out.println(card3.toString());
    }
}