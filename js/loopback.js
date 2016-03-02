




//input 
var startButton = document.getElementById('startButton');
var callButton = document.getElementById('callButton');
var hangUpButton =   document.getElementById('hangupButton');
var roomNumber = document.getElementById('roomNumber');


var localVideo = document.getElementById('localVideo'),
vendorUrl = window.URL || window.webkitURL;

var remoteVideo = document.getElementById('remoteVideo');

callButton.disabled = true;
hangUpButton.disabled = true;
startButton.disabled = false;
startButton.onclick = start; //go to function start 
callButton.onclick = call; //go to function call
hangUpButton.onclick = hangup; //go to function hangup


navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia||navigator.mozGetUserMedia || navigator.msGetUserMedia;



  function start(){

      startButton.disabled = true; //button
      callButton.disabled = false;

      navigator.getMedia({
          video : true,
          audio : false
      },function(stream){
        console.log(stream);
        localVideo.src = vendorUrl.createObjectURL(stream);
        localVideo.play();

      },function(error){

      });
      console.log('hi');

  }


  function call(){

    callButton.disabled = true;
    hangUpButton.disabled = false;

  }

  function hangup(){
      callButton.disabled = true;
      hangUpButton.disabled = true;
      startButton.disabled = false;
  }
