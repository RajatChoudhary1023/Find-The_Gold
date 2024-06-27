if (navigator.onLine==false) {
    alert("Check Your Internet Connection!");
    document.getElementById('body').style.display="none";
}


window.addEventListener('load', function() {
    document.getElementById('G').style.transform='rotate(-360deg)';
  });

function redirect() {
  window.location.href="details.html";
}
function message() {
  document.getElementById('para').style.border="1px solid white";
  document.getElementById('para').style.backgroundColor="#0f0f0f";
  document.getElementById('para').innerHTML="Start the Game.Your Canvas is the area where the gold is hidden.<br>Find the gold by clicking on the canvas.<br>🟥 means you are far away from gold.<br>🟨 means gold is nearby.<br>🟩 means you are just few steps away from gold.<br>If you get the gold It's all yours!<br> Good Luck!"
}
