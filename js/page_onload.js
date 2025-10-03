
var ip_info='';

function page_onload()
    {
        
        if (localStorage.pagecount)
         {
         localStorage.pagecount=Number(localStorage.pagecount) +1;
         }
        else
         {
         localStorage.pagecount=1;
         }
        //document.write("Visits: " + localStorage.pagecount + " time(s).");

        alert("Visits: " + localStorage.pagecount + " time(s).");
        document.getElementById('total_visit_num').innerHTML= (localStorage.pagecount).toString();

       
    }//end of page onload
    


