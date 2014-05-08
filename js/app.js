function scrollIntoView(eleID) {
   var e = document.getElementById(eleID);
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
}
/* When a country is selected OR submited */
function GetData(){
    var inputCountry = document.getElementById('countryid');
    document.getElementById('srchcount').innerHTML = inputCountry.value;
    console.log('Getting data for ' + inputCountry.value);
    callDB();
    setTimeout(function(){EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0);},1000);
    //setTimeout(EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0),3000);
    //EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0);
    //document.getElementById("srchcount").scrollIntoView();
    
}

//Creating function that grabs the clicked country and displays it inside search field
var countrySelected = function(){
    var countryID = "";
    var countryName = "";
    
    return{
        get: function(){
            alert('Country ID = ' + countryID +' Country Name: '+ countryName);
        },
        set: function(id,title){
            countryID = id;
            countryName = title;
            
            var inputCountry = document.getElementById('countryid');
            inputCountry.value = countryName.trim();
            //inputCountry.focus();
        }
    };
};



var selcountry = new countrySelected;

var httpObject = HTTPObj.getInstance();
//var httpObject2 = HTTPObj.getInstance();

//alert('Are these the same? ' + (httpObject === httpObject2)  );

function callDB(){
    // Insert correct limnk depending on variables
    httpObject.open('GET', 'http://davidg.io:2014/api/Mexico', true); /*http://ip.jsontest.com/*/
    httpObject.send(null);
    httpObject.onreadystatechange = function(){
        if (httpObject.readyState === 4) {
          if (httpObject.status === 200) {
            //Everything is good, the response is received
            var d = new Date();
            var n = d.getTime();
            
            console.log('Just got a response from Server! '+ n);
            console.log(httpObject.responseText);
            
          } else {
            //Incorret status
            alert('incorrect status');
          }
        }else{
            //Still not ready
            console.log('Still not ready'); 
        }
    };   
}



