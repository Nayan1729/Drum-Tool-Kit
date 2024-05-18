       var soundArr = ["kick-bass","crash","snare","tom-1","tom-2","tom-3","tom-4"] 
        for (var i=0;i<soundArr.length;i++)
            {
                var audio = new Audio();
                audio.src = "./sounds/" + soundArr[i] + ".mp3"
                audio.preload = 'auto';
            }
for(var i=0 ;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        if(event.handled === false) return
        event.stopPropagation();
        event.preventDefault();
        event.handled = true;
        var innerText = this.textContent;
        playAudio(innerText);
        buttonAnimation(innerText);
    });
    document.querySelectorAll(".drum")[i].addEventListener("touchstart", function(event) {    
        if(event.handled === false) return
        event.stopPropagation();
        event.preventDefault();
        event.handled = true;
        var innerText = this.textContent;
        var audio = new Audio();
        audio.src = "./sounds/" + innerText + ".mp3";
        audio.preload = 'auto';
        playAudio(innerText);
        buttonAnimation(innerText);
    });
}

document.addEventListener("keydown",function(event)
{   
    playAudio(event.key);
    buttonAnimation(event.key);
});

function playAudio(key)
{
    var keyPressed=key;
    switch(keyPressed)
    {
        case "w":
            var audio =new Audio("./sounds/crash.mp3");
            audio.play();
            break;
            case "a":
            var audio =new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
            case "s":
            var audio =new Audio("./sounds/snare.mp3");
            audio.play();
            break;
            case "d":
            var audio =new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
            case "j":
            var audio =new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
            case "k":
            var audio =new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
            case "l":
            var audio =new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
            default : console.log(innerText);
    }   
}
function buttonAnimation(currentKey){
   var selectedButton= document.querySelector("."+currentKey);
   selectedButton.classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 50);
}
