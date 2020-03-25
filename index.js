function playsound(received)
{


    if(received==='w')
    {
    var sound2=new Audio("sounds/tom-1.mp3");
    sound2.play();

  }

  if(received==='a')
  {
    var sound3=new Audio("sounds/tom-2.mp3");
    sound3.play();

  }
  if(received==='s')
  {
    var sound4=new Audio("sounds/tom-3.mp3");
    sound4.play();
  }
  if(received==='d')
  {
    var sound5=new Audio("sounds/tom-4.mp3");
    sound5.play();
  }
  if(received==='j')
  {
    var sound6=new Audio("sounds/kick-bass.mp3");
    sound6.play();
  }
  if(received==='k')
  {
    var sound7=new Audio("sounds/snare.mp3");
    sound7.play();
  }
  if(received==='l')
  {
    var sound8=new Audio("sounds/crash.mp3");
    sound8.play();
  }

}
for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnnerHTML=this.innerHTML;

    playsound(buttoninnnerHTML);
    buttonAnimation(buttoninnnerHTML);
    setTimeout(function(){   document.querySelector("."+buttoninnnerHTML).classList.remove("pressed"); }, 100);


  });
}
document.addEventListener("keydown",function(event){

  playsound(event.key);
  buttonAnimation(event.key);
  setTimeout(function(){   document.querySelector("."+event.key).classList.remove("pressed"); }, 100);


});
function buttonAnimation(keypress)
{
  document.querySelector("."+keypress).classList.add("pressed");
}
