
//Create HTTP Object - Singleton
var HTTPObj = function (){

    var httpObj;
    function createInstance() {
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpObj = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 8 and older
            httpObj = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        return httpObj;
    }
    return {
        getInstance: function (){
            
            if (!httpObj) {
                httpObj = createInstance();
            }
            return httpObj;
        }
    };
}();