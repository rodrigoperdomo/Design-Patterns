public class Main {
    public static void main(String[] args) {
        //Windows
        IUFactory  windowsFactory = UIAbstractFactory.renderComponents("Windows");
        windowsFactory.renderButton();
        windowsFactory.renderVentana();

        //Mac
        IUFactory macFactory = UIAbstractFactory.renderComponents("Mac");
        macFactory.renderButton();
        macFactory.renderVentana();

    }
}