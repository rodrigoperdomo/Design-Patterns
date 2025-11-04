public class Main {
    public static void main(String[] args) {
        FileLeaf fileLeaf = new FileLeaf("Imagen.png");
        FileLeaf fileLeaf2 = new FileLeaf("Reporte.pdf");

        DirectoryComposite directoryComposite = new DirectoryComposite("Imagenes");
        directoryComposite.add(fileLeaf);
        directoryComposite.showDetails("1");

        DirectoryComposite directoryComposite2 = new DirectoryComposite("Home");
        directoryComposite2.add(directoryComposite);
        directoryComposite2.add(fileLeaf2);
        directoryComposite2.showDetails("2");
    }
}