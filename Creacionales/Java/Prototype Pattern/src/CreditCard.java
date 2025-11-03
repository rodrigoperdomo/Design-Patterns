public class CreditCard implements Cloneable{

    private String titular;
    private int idCard;
    private String numberCard;
    private String CV;

    public CreditCard(String titular, int idCard, String numberCard, String CV) {
        this.titular = titular;
        this.idCard = idCard;
        this.numberCard = numberCard;
        this.CV = CV;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public CreditCard clone() throws CloneNotSupportedException {
        return (CreditCard) super.clone();
    }

    @Override
    public String toString() {
        return "CreditCard{" +
                "titular='" + titular + '\'' +
                ", idCard=" + idCard +
                ", numberCard='" + numberCard + '\'' +
                ", CV='" + CV + '\'' +
                '}';
    }
}
