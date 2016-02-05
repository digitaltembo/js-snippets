// uploads file to url
// options are parameters of an XMLHttpRequest, including a possibly important
// onload parameter. 
// data is any other formdata you want to be sent
function ajaxFileUpload(url, file,  async = true, options = {}, data = false){
    var xreq = new XMLHttpRequest();
    for(key in options){
        xreq[key] = options[key];
    }
    xreq.open("post", url, async);
    if(!data)
      data = new FormData();
    data.append("file", file, file.name);
    xreq.send(data);
}