let value1=document.getElementById("value1")
let value2=document.getElementById("value2")
let value3=document.getElementById("value3")
let inpSpeed=document.getElementById("inppSpeed")
let button=document.getElementById("inppSpeed")
let win=document.getElementById("win")

let values=[
    "🍌","🍕","🧁","🍒","🍇","🍓","🥭","🍑"
]

function getRandomValue(){
           return values[Math.floor(Math.random() * 7)]
}






let animationId;
function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId)
    animationId=setInterval(() => {
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
    }, 1000/newSpeed);
}

let control=10;

inppSpeed.onchange=function(ev){
    
    control=ev.target.value;
    
    }

function spin(){
    // Root  of CSS 
    document.documentElement.style.setProperty("--speed",control)
    updateAnimation(control);
    setTimeout(() => {
        document.documentElement.style.setProperty("--speed",0)
        clearInterval(animationId);
    }, 900);

    setTimeout(() => {
    if((value1.innerText==value2.innerText) && (value1.innerText==value3.innerText) ){
         win .innerHTML = "YOU WIN";
    }
    else{
        console.log(value1,value2,value3);
        win .innerHTML = "YOU LOSE";
    }
}, 1100);    
   

}


function reset(){
    location.reload(); 
}





