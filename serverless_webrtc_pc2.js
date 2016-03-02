navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


function receive(){

Omer.disabled = true;
hangupButton.disabled = false;

navigator.getMedia({

	video : true,
	audio : false

})

}

function hangup(){
	Deep.disabled = true;
	hangupButton.disabled = true;
	Omer.disabled = false;
}
