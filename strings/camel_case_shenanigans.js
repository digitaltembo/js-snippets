// takes a camelcase string and makes it regular
// from http://stackoverflow.com/questions/4149276/javascript-camelcase-to-regular-form
function deCamel(s){
    return s.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str){ return str.toUpperCase(); });
}

// takes a regular string and makes it camelcase
function camelify(s){
    var s2 = "";
    var capitalize = false;
    for(var i=0; i<s.length; i++){
        if(s[i] == ' ')
            capitalize = true;
        else if(capitalize){
            s2 += s[i].toUpperCase();
            capitalize = false;
        }else{
          s2 += s[i];
        }
    }
    return s2;
}