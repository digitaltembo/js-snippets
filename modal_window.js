// creates a super simple modal window element that is the child of elem with innerHTML 
// uses the randomString function from strings/random_string.js
function createModalWindow(innerHTML, elem){
    var modal = document.createElement("DIV");
    modal.style.position="fixed";
    modal.style.left="50%";
    modal.style.top="50%";
    modal.style.background="rgba(0,0,0,0.7)";
    modal.style.borderRadius="1em";
    modal.style.border="1px solid white";
    modal.style.color="#fff";
    modal.style.padding="2em";
    
    var closeID = "closeModal-" + randomString(5);
    modal.innerHTML=innerHTML+'<button class="close-button" id="' + closeID + '">close</button>';
    document.lastChild.lastChild.appendChild(modal);
    modal.style.marginLeft=(-modal.offsetWidth/2)+"px";
    modal.style.marginTop=(-modal.offsetHeight/2)+"px";
    document.getElementById(closeID).addEventListener("click", function(){
        document.lastChild.lastChild.removeChild(modal);
    });
}