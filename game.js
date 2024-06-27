let yellowx=0;
let yellowy=0;
    document.getElementById('rock').addEventListener('click',function(event) {
        const container = document.getElementById("container");
        const x = event.pageX-20 - container.offsetLeft;
        const y = event.pageY-20 - container.offsetTop;
        const random1=Math.floor(Math.random()*x);
        const random2=Math.floor(Math.random()*y);
        document.getElementById('comp').style.top=random2+"px";
        document.getElementById('comp').style.left=random1+"px";
        yellowx+=random1;
        yellowy+=random2;
        document.getElementById('rock').style.visibility="hidden";
        document.getElementById('comp').style.opacity=0;
    });



    const square = document.createElement("div");
    square.className= "square";
    container.appendChild(square);
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    container.addEventListener("click", function(event) {

        const x = event.pageX - container.offsetLeft;
        const y = event.pageY - container.offsetTop;
        square.style.left = x + "px";
        square.style.top = y + "px";


            const yellow=document.getElementById('comp');
            const red=document.querySelector('.square');

            const redpos=red.getBoundingClientRect();
            const yellowpos=yellow.getBoundingClientRect();
            if (redpos.right >= yellowpos.left &&
                redpos.left <= yellowpos.right &&
                redpos.bottom >= yellowpos.top &&
                redpos.top <= yellowpos.bottom) {
                    document.getElementById('steps').innerHTML="Gold Detector:🟩";
                    document.getElementById('comp').style.opacity=1;
                    makediv();
                    setTimeout(redirect,2000);
                } else {
                    let dist=Math.floor(Math.sqrt(Math.pow(yellowx-x,2)+Math.pow(yellowy-y,2))-10);
                    if (dist>80) {
                        document.getElementById('steps').innerHTML="Gold Detector:🟥";
                    } else if (dist>10 && dist<=80) {
                        document.getElementById('steps').innerHTML="Gold Detector:🟨";
                    } else if (dist<=10) {
                        document.getElementById('steps').innerHTML="Gold Detector:🟩";
                    }
                     
                }

    });
});
function redirect() {
    window.location.href="result.html";
}

function makediv() {
    const win=document.createElement('div');
    win.className='youwin';
    document.getElementById('container').appendChild(win);
    document.querySelector('.youwin').innerHTML="Congratulations! You Win 🥳";
}


