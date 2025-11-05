//Bridge
public abstract class Shape {
    public IDrawingApi drawingApi;

    public Shape(IDrawingApi drawingApi){
        this.drawingApi = drawingApi;
    }

    public abstract void draw();
    public abstract void resize(double factor);
}
