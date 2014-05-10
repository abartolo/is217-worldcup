function scrollIntoView(eleID) {
   var e = document.getElementById(eleID);
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
}
/* When a country is selected OR submited */
function TransitionClick(tmp){
    var inputCountry = tmp;
    document.getElementById('srchcount').innerHTML = inputCountry;
    console.log('Transition Function Executing');
    //callDB();
    setTimeout(function(){EPPZScrollTo.scrollVerticalToElementById('SearchResultLbl', 0);},1000);
    //setTimeout(EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0),3000);
    //EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0);
    //document.getElementById("srchcount").scrollIntoView();
    
}


function FilterCountry(ctry){
    
    if (ctry === 'Russian Federation'){
        return 'Russia';
    }else if ( ctry === 'United States'){
        return 'USA';
    }else{
        return ctry;
    }
    
} 

var callDB = function(){
     
    
    return {
        apicall: function(selctry){
            
            var country = FilterCountry(selctry);
           //Create URL
            var api_url = 'http://davidg.io:2014/api/' + country ;
            console.log(api_url);

            //Insert correct limnk depending on variables
            httpObject.open('GET', api_url , false); /*Need to wait for Server to Respond*/
            httpObject.send(null);
            var d = new Date();
                    var n = d.getTime();

                    console.log('Just got a response from Server! '+ n);
                    console.log(httpObject.responseText);
                    
                    var json = JSON.parse(httpObject.responseText);
                    if (json !== null && json.length > 0){
                        console.log('now I am going to return B!!!!');
                        return json; 
                    }else{
                        console.log('RETURNING FALSE - ERROR');
                        return false;
                    }

        }
        
    };
      
};


var callDBobj = new callDB;

var httpObject = HTTPObj.getInstance();


