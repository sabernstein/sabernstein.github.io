var current0 = "right0";
var current1 = "right1";
var current2 = "right2";

const logo = document.querySelectorAll('#logo path');
console.log(logo);

for(let i=0; i<15; i++){
  console.log('Letter ' + i + 'is ' + logo[i].getTotalLength());
}

function switchDown(i) {
  if (i == 0) {
    if(current0 == "right0"){
      current0 = "down0";
      document.getElementById('right0').innerHTML = '<i class="material-icons" id="down0">keyboard_arrow_down</i>';
      document.getElementById('grid-container').innerHTML = "";
    }
    else {
      current0 = "right0";
      document.getElementById('right0').innerHTML = '<i class="material-icons" id="right0">keyboard_arrow_right</i>';
      document.getElementById('grid-container').innerHTML = "";
    }
  }
  else if (i == 1) {
    if(current1 == "right1"){
      current1 = "down1";
      document.getElementById('right1').innerHTML = '<i class="material-icons" id="down1">keyboard_arrow_down</i>';
      document.getElementById('pulldown-menu-fresh').innerHTML = '<li>Multivariable Differential Calculus </li><li>Fundamentals of Computer Programming I </li><li>Environment and Society </li><li>Principles of Entrepreneurship </li><li>The Nature of Plants </li><li>Linear Algebra </li><li>Fundamentals of Computer Programming II </li><li>Ocean and Coastal Law and Policy </li>';
    }
    else {
      current1 = "right1";
      document.getElementById('right1').innerHTML = '<i class="material-icons" id="right1">keyboard_arrow_right</i>';
      document.getElementById("pulldown-menu-fresh").innerHTML="";
    }
  }
  else {
    if(current2 == "right2"){
      current2 = "down2";
      document.getElementById('right2').innerHTML = '<i class="material-icons" id="down2">keyboard_arrow_down</i>';
      document.getElementById("pulldown-menu-soph").innerHTML =
      "<li>Data Structures and Data Management </li><li>Human Computer Interaction </li> </li><li>AI and Experimental Narratives</li> </li><li>Discrete Mathematics in Computer Science</li>";
    }
    else {
      current2 = "right2";
      document.getElementById('right2').innerHTML = '<i class="material-icons" id="right2">keyboard_arrow_right</i>';
      document.getElementById("pulldown-menu-soph").innerHTML="";
    }
  }
}
