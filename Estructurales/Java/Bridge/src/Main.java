public class Main {
    public static void main(String[] args) {
        //Concrete implementation
        IDrawingApi drawingApi = new DrawingApi1();
        IDrawingApi drawingApi1 = new DrawingApi2();

        //Redefined Abstraction
        Shape circleShape = new CircleShape(10.0,20.0,20,drawingApi);
        Shape circleShape2 = new CircleShape(9.0,5.0,10.0,drawingApi1);

        //Methods
        circleShape.draw();
        circleShape.resize(2.0);
        circleShape2.draw();
    }
}