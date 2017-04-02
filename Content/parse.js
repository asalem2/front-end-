/**
 * Created by NoLimitProduction on 4/1/17.
 */

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    function parse() {
        var request = new XMLHttpRequest();
//        request.open("GET", "~/Content/parse.json", false);
        request.open("GET", "data.json", false);
        request.send();
        var JSON_object = JSON.parse(request.responseText);
        if (JSON_object.is_published == "true") {
            console.log(JSON_object.is_published);
            JSON_object.title.capitalize();

        }
    }

/*
        if(JSON_object.title[0].toLowerCase() == JSON_object.title[0]){
            capitalize();
            /!*var i;
             for(i=0; i<JSON_object.title.length; i++){
             if(JSON_object.title[0] === JSON_object.titletoUpperCase()
             }*!/
        }
*/



    console.log("hi");




/*
var request = new XMLHttpRequest();
request.open("GET", "data.json", false);
request.send(null);
request.onreadystatechange = function() {
    if ( request.readyState === 4 && request.status === 200 ) {
        var my_JSON_object = JSON.parse(request.responseText);
        console.log(my_JSON_object);
        my_JSON_object.
    }
}

*/

/*
var request;

if(window.XMLHttpRequest){
    request=new XMLHttpRequest();
}else{
    request=new ActiveXObject("Mixrosoft.XMLHTTP");
}

var info = JSON.parse(request.responseText);
request.open('GET', "~data");
request.onreadystatechange = function () {{
    if((request.status === 200) &&
        (request.readyState === 4)){

        var output = '';
        for(var i = 0; i<info.links.length-1; i++){
            if(info.links[i].hasOwnProperty(key)){
                output += '<li>' +
                <a href =
            }
        }
    }
}
    
}*/
