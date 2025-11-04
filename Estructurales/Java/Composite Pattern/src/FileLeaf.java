public class FileLeaf implements IFileSystemComponent{

    private String name;

    public FileLeaf(String name){
        this.name=name;
    }

    @Override
    public void showDetails(String identifier) {
        System.out.println(identifier + "-" + name);
    }
}
