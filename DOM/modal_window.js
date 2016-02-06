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

/*
 * Should go with CSS like so: 
 * 
 * .close-button {
 *     width: 1em;
 *     height: 1em;
 *     position: absolute;
 *     right: 1em;
 *     top: 1em;
 *     overflow: hidden;
 *     text-indent: 1em;
 *     font-size: 0.75em;
 *     border: none;
 *     background: transparent;
 *     color: transparent;
 *     cursor:pointer;
 * }
 * .close-button::before,
 * .close-button::after {
 *     content: '';
 *     position: absolute;
 *     width: 3px;
 *     height: 100%;
 *     top: 0;
 *     left: 50%;
 *     background: #bdc3c7;
 * }
 * .close-button::before {
 *     -webkit-transform: rotate(45deg);
 *     transform: rotate(45deg);
 * }
 * .close-button::after {
 *     -webkit-transform: rotate(-45deg);
 *     transform: rotate(-45deg);
 * }
 * 
 */