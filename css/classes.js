// toggles whether elem has the class of className
function toggleClass(elem, className){
    if (typeof elem.className == 'undefined'){
        elem.className = "";
    }
    var index = elem.className.indexOf(className)
    if(index == -1)
        elem.className += " " + className;
    else
        elem.className = elem.className.substr(0, index) + 
                         elem.className.substr(index+className.length+1);
}

// ensures elem has the class className iff toggle
function setClass(elem, className, toggle){
    if (typeof elem.className == 'undefined'){
        elem.className = "";
    }
    var index = elem.className.indexOf(className)
    if(index == -1 && toggle)
        elem.className += " "+className;
    else if(index > -1 && !toggle)
        elem.className = elem.className.substr(0, index) +
                         elem.className.substr(index+className.length+1);
} 