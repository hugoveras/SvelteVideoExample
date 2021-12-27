<script>
	import ReportView from 'components/View/ReportView.svelte';
  import CardTimeOut from 'components/Cards/CardTimeOut.svelte';
  
  let RepUrl ="https://altoexchangedemo.icgteam.com/icgteammicroservices/jasperreport/runJasperReport/9090?reportName=rptAltoExchangeInvoicesSubmittedToCustomer&reportFormat=pdf&contentType=application/pdf&reportParameters=P_CUSTOMERID=9090" 
  let RepUrlExcel ="https://altoexchangedemo.icgteam.com/icgteammicroservices/jasperreport/runJasperReport/9090?reportName=rptAltoExchangeInvoicesSubmittedToCustomer&reportFormat=xls&contentType=application/vnd.ms-excel&reportParameters=P_CUSTOMERID=9090" 
  
  </script>
  
  <CardTimeOut />
  <div class="relative bg-red-500 pb-32 pt-12">
  </div>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
     
      <ReportView ReportUrl={RepUrl} ReportUrlExcel= {RepUrlExcel}>

      </ReportView > 
     
      
    </div>
    
  </div>
  