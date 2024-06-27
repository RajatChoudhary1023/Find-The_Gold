document.getElementById('continue').addEventListener('click',function() {
     name=document.getElementById('name');
    const img1=document.getElementById('img1');
    const img2=document.getElementById('img2');
    if (name.value=="") {
        name.style.borderColor="red";
        alert("Please Enter a Name");
    }else if (flag==0) {
        alert("Please Select Your Character");
    } else {
        window.location.href="game.html";
    }
});


    let flag=0;
    const img1=document.getElementById('img1');
    img1.addEventListener('click',function() {
    this.classList.toggle('border');
    if (img1.classList.contains('border')) {
        img2.classList.remove('border');
    }
    flag=1;
    });
    const img2=document.getElementById('img2');
    img2.addEventListener('click',function() {
    this.classList.toggle('border');
    if (img2.classList.contains('border')) {
        img1.classList.remove('border');
        }
    flag=2;
    });

