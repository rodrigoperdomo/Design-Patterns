//Concrete implementation 1
public class DrawingApi1 implements IDrawingApi {
    @Override
    public void drawCircle(double x, double y, double radius) {
        System.out.println("Dibujando circulo en x: "+ x +" ,y: " + y + ", radius: "+radius);
    }
}
