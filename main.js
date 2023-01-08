var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{ 
    recognition.start();
} 
 

recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;


    console.log(Content);
    if (Content == "Selfie")
    {
console.log("taking your selfie in 5 seconds!")
    speak();}
      
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function() 
  { 
take_snapshot();
img_id="selfie1"
  } ,5000);


setTimeout(function() 
  { 
take_snapshot();
img_id="selfie2"
  } ,10000);


setTimeout(function() 
  { 
take_snapshot();
img_id="selfie3"
  } ,15000);
}

Webcam.set({
  width:360,
  height:240,
  image_format:'png',
  png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
  Webcam.snap(function(data_uri){
    if(img_id == "selfie1"){

    document.getElementById("result1").innerHTML = '<img id="selfie1" src=" '+data_uri+'">';}

    if(img_id == "selfie2"){

        document.getElementById("result2").innerHTML = '<img id="selfie2" src=" '+data_uri+'">';}

        if(img_id == "selfie3"){

            document.getElementById("result3").innerHTML = '<img id="selfie3" src=" '+data_uri+'">';}
  });
}


