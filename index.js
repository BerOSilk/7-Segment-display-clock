
// getting the main div container and clone it.
var container = document.querySelector("div.cont1");
var container1 = container.cloneNode(true); container1.className = "cont2";
var container2 = container.cloneNode(true); container2.className = "cont3";
var container3 = container.cloneNode(true); container3.className = "cont4";
var container4 = container.cloneNode(true); container4.className = "cont5";
var container5 = container.cloneNode(true); container5.className = "cont6";


container1.style.marginLeft = "50px";
container5.style.marginLeft = "50px";
container3.style.marginLeft = "50px";

var $ = document.createElement("div");
$.textContent = ":";

$.style.width = "150px";
$.style.marginTop = "-170px";
$.style.marginLeft = "-10px";
$.style.color = "#500";
$.style.fontSize = "500px";

var $1 = $.cloneNode(true);

// the innner body
var inner = document.querySelector("div.inner-body");

// appending the clones into the inner body.
inner.appendChild(container1);
inner.appendChild($);
inner.appendChild(container2);
inner.appendChild(container3);
inner.appendChild($1);
inner.appendChild(container4);
inner.appendChild(container5);


// getting the segments.
var segments1 = document.querySelectorAll("div.cont1 div.seg");
var segments2 = document.querySelectorAll("div.cont2 div.seg");
var segments3 = document.querySelectorAll("div.cont3 div.seg");
var segments4 = document.querySelectorAll("div.cont4 div.seg");
var segments5 = document.querySelectorAll("div.cont5 div.seg");
var segments6 = document.querySelectorAll("div.cont6 div.seg");


// a wait function to delay the proccess for x amount of time, where x is in millieseconds.
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// a function to get the current time.
function time(){
    const date = new Date();
    return {"h":date.getHours(),"m":date.getMinutes(),"s":date.getSeconds()};
}


function colors(x){
    switch (x){
        case 0:
            return ["white","white","white","white","white","white","#000"];
        case 1:
            return ["#000","#000","white","white","#000","#000","#000"];
        case 2:
            return ["#000","white","#000","white","white","white","white"];
        case 3:
            return ["#000","#000","white","white","white","white","white"];
        case 4:
            return ["white","#000","white","white","#000","#000","white"];
        case 5:
            return ["white","#000","white","#000","white","white","white"];
        case 6:
            return ["white","white","white","#000","white","white","white"];
        case 7:
            return ["#000","#000","white","white","white","#000","#000"];
        case 8:
            return ["white","white","white","white","white","white","white"];
        case 9:
            return ["white","#000","white","white","white","white","white"];
        default:
            return ["#000","#000","#000","#000","#000","#000","#000"];
    }
}

function apply(time,fSegments,sSegments){
    
    var f = 0;
    if(time < 10){
        var x = colors(-1);
        for(let i = 0;i < 7;i++){
            fSegments[i].style.backgroundColor = x[i];
        }
        if(time == 0){
            for(let i = 0;i < 7;i++){
                sSegments[i].style.backgroundColor = x[i];
            }
        }
    }
    
    while(time){
        var x = colors(time%10);
        time /= 10;
        time = parseInt(time);
        if(f == 0){
            for(let i = 0;i < 7;i++){
                sSegments[i].style.backgroundColor = x[i];
            }
        }else{
            for(let i = 0;i < 7;i++){
                fSegments[i].style.backgroundColor = x[i];
            }
        }
        f ^= 1;
    }


}

function loop(){
    
    window.requestAnimationFrame(loop);

    var times = time();
    
    apply(times["h"],segments1,segments2);
    apply(times["m"],segments3,segments4);
    apply(times["s"],segments5,segments6);

}

loop();
