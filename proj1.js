const buttons=document.querySelectorAll('.button')  //selected all the buttons using class
const body=document.querySelector("body")  //selected body using tag name
 buttons.forEach(function(button){      //for each can means har ek k lia and ye hold krta hai ek callback function ko
        button.addEventListener('click',function(e){     //evnt add krdia add event ka use krke aage event likha  kynsa use krre fir ek call back func with event var'e'
                if(e.target.id==='grey'){      //e.target kisko target krna hai ye btata hai
                        body.style.backgroundColor=e.target.id;  //body ka color chnge
                }
                if(e.target.id==='white'){
                        body.style.backgroundColor=e.target.id;
                }
                if(e.target.id==='blue'){
                        body.style.backgroundColor= e.target.id;

                }
                if(e.target.id==='yellow'){
                        body.style.backgroundColor=e.target.id;
                }
        })
        
 })