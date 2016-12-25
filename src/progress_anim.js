window.anim = function(txt1, txt2, progressCount, speed){
  if (!progressCount || !speed) alert("You MUST set text/string, progressCount and speed in the anim() function"); 
  var p = 1;
  var el = document.querySelector('.PP');
  var i = setInterval(function(){
    el.style.width = p + "%";
    el.style.transition = "width " + (speed / 500) + "s linear;";
    el.innerHTML = txt1 + " " + p + "% " + txt2;
    p++;
    if(p > progressCount){
      clearInterval(i);
    }
  }, speed);
}