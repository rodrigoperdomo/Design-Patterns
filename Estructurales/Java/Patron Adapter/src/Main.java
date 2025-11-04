public class Main {
    public static void main(String[] args) {
        ReportXML reportXML = new ReportXML();
        ReportXMLJsonAdapter reportXMLJsonAdapter = new ReportXMLJsonAdapter(reportXML);
        System.out.println(reportXMLJsonAdapter.generateReport());
    }
}