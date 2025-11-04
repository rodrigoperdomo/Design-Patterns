import java.util.ArrayList;
import java.util.List;

public class DirectoryComposite  implements IFileSystemComponent{
    public String name;
    public List<IFileSystemComponent> children = new ArrayList<>();

    public DirectoryComposite(String name){
        this.name=name;
    }

    public void add(IFileSystemComponent fileSystemComponent){
        children.add(fileSystemComponent);
    }

    @Override
    public void showDetails(String identifier) {
        System.out.println(identifier + " - Directory: "+name);
        for(IFileSystemComponent c: children){
            c.showDetails(identifier + " ");
        }
    }
}
