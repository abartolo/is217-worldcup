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
    setTimeout(function(){EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0);},1000);
    //setTimeout(EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0),3000);
    //EPPZScrollTo.scrollVerticalToElementById('filtcontdiv', 0);
    //document.getElementById("srchcount").scrollIntoView();
    console.log('Getting data for ' + inputCountry.value);
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



var EPPZScrollTo =
{
    /**
     * Helpers.
     */
    documentVerticalScrollPosition: function()
    {
        if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari.
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
        if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8.
        return 0; // None of the above.
    },

    viewportHeight: function()
    { return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight; },

    documentHeight: function()
    { return (document.height !== undefined) ? document.height : document.body.offsetHeight; },

    documentMaximumScrollPosition: function()
    { return this.documentHeight() - this.viewportHeight(); },

    elementVerticalClientPositionById: function(id)
    {
        var element = document.getElementById(id);
        var rectangle = element.getBoundingClientRect();
        return rectangle.top;
    },

    /**
     * Animation tick.
     */
    scrollVerticalTickToPosition: function(currentPosition, targetPosition)
    {
        var filter = 0.2;
        var fps = 25;/*60*/
        var difference = parseFloat(targetPosition) - parseFloat(currentPosition);

        // Snap, then stop if arrived.
        var arrived = (Math.abs(difference) <= 0.5);
        if (arrived)
        {
            // Apply target.
            scrollTo(0.0, targetPosition);
            return;
        }

        // Filtered position.
        currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);

        // Apply target.
        scrollTo(0.0, Math.round(currentPosition));

        // Schedule next tick.
        setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+currentPosition+", "+targetPosition+")", (1000 / fps));
    },

    /**
     * For public use.
     *
     * @param id The id of the element to scroll to.
     * @param padding Top padding to apply above element.
     */
    scrollVerticalToElementById: function(id, padding)
    {
        var element = document.getElementById(id);
        if (element == null)
        {
            console.warn('Cannot find element with id \''+id+'\'.');
            return;
        }

        var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
        var currentPosition = this.documentVerticalScrollPosition();

        // Clamp.
        var maximumScrollPosition = this.documentMaximumScrollPosition();
        if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;

        // Start animation.
        this.scrollVerticalTickToPosition(currentPosition, targetPosition);
    }
};
