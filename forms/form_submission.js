//taking in a url and a set of parameters, submits the parameters as a form
function makeAndSubmitForm(url, params, options = {newTab: false, method: "post"}){
    if ! 'newTab' in options
      options.newTab = false;
    if ! 'method' in options:
      options.method = "post";
    
    var f = document.createElement("form");
    f.setAttribute('method',method);
    f.setAttribute('action',url);
    
    if(options.newTab)
      f.setAttribute('target', '_blank');
    
    for(name in params){
        var i = document.createElement("input");
        i.setAttribute('type',"text");
        i.setAttribute('name',name);
        i.setAttribute('value',params[name]);
        f.appendChild(i);
    };
    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");
    f.appendChild(s);
    document.getElementsByTagName("body")[0].appendChild(f);
    f.submit();
}