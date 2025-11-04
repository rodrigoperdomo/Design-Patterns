public class ReportXMLJsonAdapter implements IGenerateReport{

    public ReportXML reportXML;

    public ReportXMLJsonAdapter(ReportXML reportXML){
        this.reportXML=reportXML;
    }

    public String generateReportJson(){
        String xml = this.reportXML.generateReport();
        String json = "Genero reporte desde clase xml que tenia este metodo: "+xml;
        return json;
    }

    @Override
    public String generateReport() {
        return generateReportJson();
    }
}
