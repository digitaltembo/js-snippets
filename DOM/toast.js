/*** To be accompanied by the following css:
  
.toast{
    position:fixed;
    bottom:3px;
    left: 50%;
    border-radius: 2px;
    border: 1px solid #586E6B;
    color #586E6B;
    
    background: #ABC9C5;
    padding:4px 8px;
    font-size:.8em;
    opacity: 1;
}

.toast.fading{
    opacity: 0;
    transition: opacity 1s;
}

***/


function toast(message, duration, options){
    var toast = document.createElement("div");
    toast.innerHTML = message;
    toast.className = "toast";

    if(typeof duration == "number" && duration > 0){
            setTimeout(function(){
            toast.parentElement.removeChild(toast);
        }, (duration + 1) * 1000 );
        setTimeout(function(){
            toast.className += " fading";
        }, duration * 1000 );
    }

    document.body.appendChild(toast);
}