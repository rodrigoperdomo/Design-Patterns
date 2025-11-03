public class UIAbstractFactory {
    private static IUFactory uiFactory;

    public static IUFactory renderComponents(String so){
        switch (so){
            case "Windows":
                return new WindowsUI();
            case "Mac":
                return new MacUI();
            default:
                System.out.println("No es una so compatible");
        }
        return null;
    }
}
