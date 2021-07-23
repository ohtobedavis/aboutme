function darkModeToggle(){
  var bodyelement=document.getElementById("mainbackground");
  var header=document.getElementById("davis1");
  var blockquote=document.getElementById("opener");
  var content=document.getElementsByClassName("content");
  // bodyelement.style.background='darkgreen';
  if (bodyelement.style.background == 'black'){
    bodyelement.style.background='darkgreen';

    console.log(bodyelement);
  }
  else{
    console.log("not darkgreen");
    bodyelement.style.background='black';

    header.style.color='white';
    blockquote.style.color='white';
    for (let i = 0; i < content.length; i++) {
      content[i].style.color='white';
    }
  }
}
