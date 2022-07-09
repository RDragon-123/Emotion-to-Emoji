//https://teachablemachine.withgoogle.com/models/wVeewhJUg/
prediction_1=""
prediction_2=""
Webcam.set({
   width:350,height:300,image_format:"png",png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach("camera")
function takesnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img src='"+data_url+"' id='new_img'>"
    });
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wVeewhJUg//model.json",modelLoaded)
function modelLoaded(){
    console.log("Model is Loaded")
}
function speak(){
    var synth=window.speechSynthesis;
    data1="The first prediction is "+prediction_1
    data2="The second prediction is "+prediction_2
    var utter=new SpeechSynthesisUtterance(data1+data2)
    synth.speak(utter)
}
speak()