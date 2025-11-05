//Redefined Abstraction
public class CircleShape extends Shape{
    public double x,y,radius;

    public CircleShape(double x, double y, double radius,IDrawingApi drawingApi){
        super(drawingApi);
        this.x=x;
        this.y=y;
        this.radius=radius;
    }

    @Override
    public void draw() {
        drawingApi.drawCircle(this.x,this.y,this.radius);
    }

    @Override
    public void resize(double factor) {
        System.out.println("Resize: "+(radius*=factor));
    }
}
