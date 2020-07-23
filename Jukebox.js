
let tracks =[
"https://www.youtube.com/embed/_g19fCJotPc",
"https://www.youtube.com/embed/zINlfg0aGqw",
"https://www.youtube.com/embed/u9Dg-g7t2l4",
"https://www.youtube.com/embed/bfa9yxCpWoA",
"https://www.youtube.com/embed/GSBFehvLJDc",
"https://www.youtube.com/embed/XQEBzauVIlA",
"https://www.youtube.com/embed/SbUBMklQSVU",
"https://www.youtube.com/embed/-zzP29emgpg",
"https://www.youtube.com/embed/MKQDzpIwAMo",
"https://www.youtube.com/embed/KD5fLb-WgBU"]


function changeLink(){
  if(tracks.length>0){
    let firstChange = Math.floor(Math.random() * tracks.length);
    let secondChange = tracks.splice(firstChange, 1);
    document.getElementById("musicLink").src = secondChange;
     } 
  else {
    alert("I'm sorry, you've viewed all the tracks.\nTo view again please refresh the browser");
  }
}

function showVid(){
  document.getElementById("musicLink").style.display="block";
}



 