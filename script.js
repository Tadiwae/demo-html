
function changeText(){
    let element=document.querySelector(".Subscribe,.Subscribed");
    if(element.textContent==="Subscribe"){
        element.textContent="Subscribed";
        element.classList.add("Subscribed");
        innerHTML.classList.remove("Subscribe");
       
        }
    else{
        element.textContent="Subscribe";
        element.classList.remove("Subscribed");
        innerHTML.classList.add("Subscribe")
        
        
    }

}