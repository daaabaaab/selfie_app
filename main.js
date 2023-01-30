var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="Take my selfie")
    {
     speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    text="Taking selfie in 5 seconds";
    var speech= new SpeechSynthesisUtterance(text);
    synth.speak(speech);
    Webcam.attach(cam);
    setTimeout(function(){
        e();
        save();
    },5000
    );
}


Webcam.set({
width:350,
height:400,
image_format:'jpeg',
jpeg_quality:90
});

var cam=document.getElementById("camera");


function e(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
   });}

 function save()  
 {
    link=document.getElementById("link");
    image=document.getElementById("selfie1").src;
    link.href=image;
    link.click();
 }
