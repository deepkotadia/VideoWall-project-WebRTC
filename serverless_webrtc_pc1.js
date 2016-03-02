//input 
var startButton = document.getElementById('startButton');
var callButton = document.getElementById('callButton');
var hangUpButton =   document.getElementById('hangupButton');
var localVideo = document.getElementById('localVideo'),

vendorUrl = window.URL || window.webkitURL;

var remoteVideo = document.getElementById('remoteVideo');


callButton.disabled = true;

hangUpButton.disabled = true;

startButton.disabled = false;

startButton.onclick = start; //go to function start 

callButton.onclick = call; //go to function call

hangUpButton.onclick = hangup; //go to function hangup

navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;


servers = null;

  function start(){
      startButton.disabled = true; //button
      callButton.disabled = false;
  }

var cfg = {'iceServers': [{'url': 'stun:23.21.150.121'}]};
var con = { 'optional': [{'DtlsSrtpKeyAgreement': true}] };
var pc1 = new RTCPeerConnection(cfg, con),


//------------------------------------------------------------------------------

//http://www.html5rocks.com/en/tutorials/webrtc/basics/
//http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/
//http://davekilian.com/webrtc-the-hard-way.html



/*
the call button will focus on signaling 
    -the reason webrtc doesnt do signaling is so someone can choose their protocol



Caller must

    1) create an RTCPeerConnection
    2  create an offer by using the createOffer() method
    3) client calls setLocalDescription with offer 
    4) stringify the offer and use signaling mechanism to send to ever

Calle must:
*/











//Omer's computer info: host=192.168.39.107 port=5000 \
//Deep's computer info:  host=192.168.39.108 port=5000 \







  function call(){

    callButton.disabled = true;
    hangUpButton.disabled = false;
    
    //this is all for the function getmedia    
       navigator.getMedia({
             video : true,
             audio : false
          
       },function(stream){
          
             console.log(stream);
             localVideo.src = vendorUrl.createObjectURL(stream);
             localVideo.play();
             
             
             //----ERROR PC1 IS NOT DEFINED
             pc1.addStream(stream);
 
           //----this is all a function call for create offer
            pc1.createOffer(function (desc) {
                  pc1.setLocalDescription(desc, function () {}, function () {}) //set deep's local description
                 console.log('created local offer', desc)
            },
            function () { console.warn("Couldn't create offer") },
            sdpConstraints)
          //---------------------------------------------------
      },function(error){
        console.log('Error adding stream to pc1: ' + error)
      });
    //------------------get media ends here 
 
    //--------------------now we call omer computer, set Deep's remotedescription to Omer's localdescription
    var omerLocalDesc = '{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-44.0.2 1316224912848079886 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 8C:6C:A5:F2:F6:87:CC:59:28:06:64:E1:1C:13:4A:93:9F:DC:B5:30:30:67:CD:65:B9:62:FA:D5:50:26:B7:3E\r\na=group:BUNDLE sdparta_0 sdparta_1 sdparta_2\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=audio 1043 UDP/TLS/RTP/SAVPF 109 9 0 8\r\nc=IN IP4 128.6.157.18\r\na=candidate:0 1 UDP 2122252543 192.168.39.107 43184 typ host\r\na=candidate:0 2 UDP 2122252542 192.168.39.107 33292 typ host\r\na=candidate:1 1 UDP 1686052863 128.6.157.18 1043 typ srflx raddr 192.168.39.107 rport 43184\r\na=candidate:1 2 UDP 1686052862 128.6.157.18 1044 typ srflx raddr 192.168.39.107 rport 33292\r\na=sendrecv\r\na=end-of-candidates\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\r\na=ice-ufrag:f79cb486\r\na=mid:sdparta_0\r\na=msid:{54ff524d-f015-4fa4-b3b2-88ae6dc7d12b} {b0548412-42ea-4a63-8982-2efac57c4357}\r\na=rtcp:1044 IN IP4 128.6.157.18\r\na=rtcp-mux\r\na=rtpmap:109 opus/48000/2\r\na=rtpmap:9 G722/8000/1\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=setup:actpass\r\na=ssrc:3532160375 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\r\nm=video 1045 UDP/TLS/RTP/SAVPF 120 126 97\r\nc=IN IP4 128.6.157.18\r\na=candidate:0 1 UDP 2122252543 192.168.39.107 32831 typ host\r\na=candidate:0 2 UDP 2122252542 192.168.39.107 35410 typ host\r\na=candidate:1 1 UDP 1686052863 128.6.157.18 1045 typ srflx raddr 192.168.39.107 rport 32831\r\na=candidate:1 2 UDP 1686052862 128.6.157.18 1046 typ srflx raddr 192.168.39.107 rport 35410\r\na=sendrecv\r\na=end-of-candidates\r\na=fmtp:126 profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1\r\na=fmtp:97 profile-level-id=42e01f;level-asymmetry-allowed=1\r\na=fmtp:120 max-fs=12288;max-fr=60\r\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\r\na=ice-ufrag:f79cb486\r\na=mid:sdparta_1\r\na=msid:{54ff524d-f015-4fa4-b3b2-88ae6dc7d12b} {a35c6611-d72d-4030-bc9e-db70a512b66d}\r\na=rtcp:1046 IN IP4 128.6.157.18\r\na=rtcp-fb:120 nack\r\na=rtcp-fb:120 nack pli\r\na=rtcp-fb:120 ccm fir\r\na=rtcp-fb:126 nack\r\na=rtcp-fb:126 nack pli\r\na=rtcp-fb:126 ccm fir\r\na=rtcp-fb:97 nack\r\na=rtcp-fb:97 nack pli\r\na=rtcp-fb:97 ccm fir\r\na=rtcp-mux\r\na=rtpmap:120 VP8/90000\r\na=rtpmap:126 H264/90000\r\na=rtpmap:97 H264/90000\r\na=setup:actpass\r\na=ssrc:3834042916 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\r\nm=application 1047 DTLS/SCTP 5000\r\nc=IN IP4 128.6.157.18\r\na=candidate:0 1 UDP 2122252543 192.168.39.107 52973 typ host\r\na=candidate:1 1 UDP 1686052863 128.6.157.18 1047 typ srflx raddr 192.168.39.107 rport 52973\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\r\na=ice-ufrag:f79cb486\r\na=mid:sdparta_2\r\na=sctpmap:5000 webrtc-datachannel 256\r\na=setup:actpass\r\na=ssrc:3286024334 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\r\n"}';
    var answerDesc = new RTCSessionDescription(omerLocalDesc);
    pc1.setRemoteDescription(answerDesc)
        //ERROR TypeError: Argument 1 of RTCSessionDescription.constructor can't be converted to a dictionary.


  }


//ERROR  ReferenceError: pc1 is not defined
pc1.onicecandidate = function (e) {
  console.log('ICE candidate (pc1)', e)
  if (e.candidate === null) {
    $('#localOffer').html(JSON.stringify(pc1.localDescription))
  }

    
    
}



//-----------------------getting deep to join the conversation
navigator.getMedia({
          video : true,
          audio : false
          
          
    })
    
    


















  function hangup(){
      callButton.disabled = true;
      hangUpButton.disabled = true;
      startButton.disabled = false;
  }
