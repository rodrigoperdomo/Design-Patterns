//Concrete implementation 2
public class DrawingApi2 implements IDrawingApi{
    @Override
    public void drawCircle(double x, double y, double radius) {
        System.out.println("Dibujando circulo en x: "+ x +" ,y: " + y + ", radius: "+radius);
    }
}
