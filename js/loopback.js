var Deep = document.getElementById('Deep');

var Omer = document.getElementById('Omer');

var hangUpButton =   document.getElementById('hangupButton');

var localVideo = document.getElementById('localVideo'),

vendorUrl = window.URL || window.webkitURL;
var remoteVideo = document.getElementById('remoteVideo');

Omer.disabled = false;

hangUpButton.disabled = true;

Deep.disabled = false;

Deep.onclick = DeepF; //go to function start 

Omer.onclick = OmerF; //go to function call

hangUpButton.onclick = hangup; //go to function hangup

navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

//-----------------------GLOBAL VARIABLES
      var cfg = {'iceServers': [{'url': 'stun:23.21.150.121'}]};
      var con = { 'optional': [{'DtlsSrtpKeyAgreement': true}] };
      
  var pc1 = new RTCPeerConnection(cfg, con);//deep
  var pc2 = new RTCPeerConnection(cfg, con);//omer

var sdpConstraints = {
  "offerToReceiveAudio":true,
  "offerToReceiveVideo":true
}





var omerLocalDesc = '{"type":"offer","sdp":"v=0\\r\\no=mozilla...THIS_IS_SDPARTA-44.0.2 1316224912848079886 0 IN IP4 0.0.0.0\\r\\ns=-\\r\\nt=0 0\\r\\na=sendrecv\\r\\na=fingerprint:sha-256 8C:6C:A5:F2:F6:87:CC:59:28:06:64:E1:1C:13:4A:93:9F:DC:B5:30:30:67:CD:65:B9:62:FA:D5:50:26:B7:3E\\r\\na=group:BUNDLE sdparta_0 sdparta_1 sdparta_2\\r\\na=ice-options:trickle\\r\\na=msid-semantic:WMS *\\r\\nm=audio 1043 UDP/TLS/RTP/SAVPF 109 9 0 8\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.107 43184 typ host\\r\\na=candidate:0 2 UDP 2122252542 192.168.39.107 33292 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1043 typ srflx raddr 192.168.39.107 rport 43184\\r\\na=candidate:1 2 UDP 1686052862 128.6.157.18 1044 typ srflx raddr 192.168.39.107 rport 33292\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\\r\\na=ice-ufrag:f79cb486\\r\\na=mid:sdparta_0\\r\\na=msid:{54ff524d-f015-4fa4-b3b2-88ae6dc7d12b} {b0548412-42ea-4a63-8982-2efac57c4357}\\r\\na=rtcp:1044 IN IP4 128.6.157.18\\r\\na=rtcp-mux\\r\\na=rtpmap:109 opus/48000/2\\r\\na=rtpmap:9 G722/8000/1\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=setup:actpass\\r\\na=ssrc:3532160375 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\\r\\nm=video 1045 UDP/TLS/RTP/SAVPF 120 126 97\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.107 32831 typ host\\r\\na=candidate:0 2 UDP 2122252542 192.168.39.107 35410 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1045 typ srflx raddr 192.168.39.107 rport 32831\\r\\na=candidate:1 2 UDP 1686052862 128.6.157.18 1046 typ srflx raddr 192.168.39.107 rport 35410\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=fmtp:126 profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1\\r\\na=fmtp:97 profile-level-id=42e01f;level-asymmetry-allowed=1\\r\\na=fmtp:120 max-fs=12288;max-fr=60\\r\\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\\r\\na=ice-ufrag:f79cb486\\r\\na=mid:sdparta_1\\r\\na=msid:{54ff524d-f015-4fa4-b3b2-88ae6dc7d12b} {a35c6611-d72d-4030-bc9e-db70a512b66d}\\r\\na=rtcp:1046 IN IP4 128.6.157.18\\r\\na=rtcp-fb:120 nack\\r\\na=rtcp-fb:120 nack pli\\r\\na=rtcp-fb:120 ccm fir\\r\\na=rtcp-fb:126 nack\\r\\na=rtcp-fb:126 nack pli\\r\\na=rtcp-fb:126 ccm fir\\r\\na=rtcp-fb:97 nack\\r\\na=rtcp-fb:97 nack pli\\r\\na=rtcp-fb:97 ccm fir\\r\\na=rtcp-mux\\r\\na=rtpmap:120 VP8/90000\\r\\na=rtpmap:126 H264/90000\\r\\na=rtpmap:97 H264/90000\\r\\na=setup:actpass\\r\\na=ssrc:3834042916 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\\r\\nm=application 1047 DTLS/SCTP 5000\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.107 52973 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1047 typ srflx raddr 192.168.39.107 rport 52973\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=ice-pwd:15852bb4716a802c3540f6cd6a3e70ee\\r\\na=ice-ufrag:f79cb486\\r\\na=mid:sdparta_2\\r\\na=sctpmap:5000 webrtc-datachannel 256\\r\\na=setup:actpass\\r\\na=ssrc:3286024334 cname:{211ceb22-fe05-48da-9735-29afb9f2a466}\\r\\n"}';
var omerSessDes = new RTCSessionDescription(JSON.parse(omerLocalDesc));

var deepsinformation = '{"type":"offer","sdp":"v=0\\r\\no=mozilla...THIS_IS_SDPARTA-41.0.2 6337057292520691252 0 IN IP4 0.0.0.0\\r\\ns=-\\r\\nt=0 0\\r\\na=sendrecv\\r\\na=fingerprint:sha-256 F2:96:39:3E:BA:CA:C3:64:7A:17:99:8D:4D:94:0B:E8:8F:FD:9C:1A:8C:5E:AD:F0:CE:2B:E1:5B:E1:17:7D:69\\r\\na=group:BUNDLE sdparta_0 sdparta_1 sdparta_2\\r\\na=ice-options:trickle\\r\\na=msid-semantic:WMS *\\r\\nm=audio 1031 RTP/SAVPF 109 9 0 8\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.108 55395 typ host\\r\\na=candidate:0 2 UDP 2122252542 192.168.39.108 36131 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1031 typ srflx raddr 192.168.39.108 rport 55395\\r\\na=candidate:1 2 UDP 1686052862 128.6.157.18 1032 typ srflx raddr 192.168.39.108 rport 36131\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=ice-pwd:416cce2346b0b83b3f72fc7299e51694\\r\\na=ice-ufrag:95693008\\r\\na=mid:sdparta_0\\r\\na=msid:{56a25194-4c0a-416b-8662-dd1ba47c9f12} {ef9914b2-c638-415e-80eb-6e8f839d2a5b}\\r\\na=rtcp:1032 IN IP4 128.6.157.18\\r\\na=rtcp-mux\\r\\na=rtpmap:109 opus/48000/2\\r\\na=rtpmap:9 G722/8000/1\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=setup:actpass\\r\\na=ssrc:4060280713 cname:{38ed9d31-da91-4bce-b94e-7253a71c7e3c}\\r\\nm=video 1033 RTP/SAVPF 120 126 97\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.108 41153 typ host\\r\\na=candidate:0 2 UDP 2122252542 192.168.39.108 44284 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1033 typ srflx raddr 192.168.39.108 rport 41153\\r\\na=candidate:1 2 UDP 1686052862 128.6.157.18 1035 typ srflx raddr 192.168.39.108 rport 44284\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=fmtp:120 max-fs=12288;max-fr=60\\r\\na=fmtp:126 profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1\\r\\na=fmtp:97 profile-level-id=42e01f;level-asymmetry-allowed=1\\r\\na=ice-pwd:416cce2346b0b83b3f72fc7299e51694\\r\\na=ice-ufrag:95693008\\r\\na=mid:sdparta_1\\r\\na=msid:{56a25194-4c0a-416b-8662-dd1ba47c9f12} {5a5608f3-0b33-40c9-a768-bafa8b712edd}\\r\\na=rtcp:1035 IN IP4 128.6.157.18\\r\\na=rtcp-fb:120 nack\\r\\na=rtcp-fb:120 nack pli\\r\\na=rtcp-fb:120 ccm fir\\r\\na=rtcp-fb:126 nack\\r\\na=rtcp-fb:126 nack pli\\r\\na=rtcp-fb:126 ccm fir\\r\\na=rtcp-fb:97 nack\\r\\na=rtcp-fb:97 nack pli\\r\\na=rtcp-fb:97 ccm fir\\r\\na=rtcp-mux\\r\\na=rtpmap:120 VP8/90000\\r\\na=rtpmap:126 H264/90000\\r\\na=rtpmap:97 H264/90000\\r\\na=setup:actpass\\r\\na=ssrc:154919253 cname:{38ed9d31-da91-4bce-b94e-7253a71c7e3c}\\r\\nm=application 1061 DTLS/SCTP 5000\\r\\nc=IN IP4 128.6.157.18\\r\\na=candidate:0 1 UDP 2122252543 192.168.39.108 35923 typ host\\r\\na=candidate:1 1 UDP 1686052863 128.6.157.18 1061 typ srflx raddr 192.168.39.108 rport 35923\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=ice-pwd:416cce2346b0b83b3f72fc7299e51694\\r\\na=ice-ufrag:95693008\\r\\na=mid:sdparta_2\\r\\na=sctpmap:5000 webrtc-datachannel 256\\r\\na=setup:actpass\\r\\na=ssrc:2327167445 cname:{38ed9d31-da91-4bce-b94e-7253a71c7e3c}\\r\\n"}';
var deepSessDes = new RTCSessionDescription(JSON.parse(deepsinformation));



















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




  function DeepF(){

    console.log('hey');



    Deep.disabled = true;
    Omer.disabled = false;
    
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
            
            
            pc1.setLocalDescription(deepSessDes);
            
            
          //---------------------------------------------------
      },function(error){
        console.log('Error adding stream to pc1: ' + error)
      });
    //------------------get media ends here 
 
    //--------------------now we call omer computer, set Deep's remotedescription to Omer's localdescription
  
   

    //var json = JsonConvert.SerializeObject(omerLocalDesc, Formatting.None);


    pc1.setRemoteDescription(omerSessDes)
        //ERROR TypeError: Argument 1 of RTCSessionDescription.constructor can't be converted to a dictionary.


  }


//ERROR  ReferenceError: pc1 is not defined
pc1.onicecandidate = function (e) {
  console.log('ICE candidate (pc1)', e)
}





//RECEIVER SIDE----------------------------------------------


function OmerF(){

Omer.disabled = true;
hangupButton.disabled = false;

navigator.getMedia({

  video : true,
  audio : false

},function(stream){
          
             console.log(stream);
             localVideo.src = vendorUrl.createObjectURL(stream);
             localVideo.play();
             pc2.addStream(stream);

      },function(error){
        console.log('Error adding stream to pc2: ' + error)
      });


  console.log('Received remote offer', deepSessDes);


  
  
   pc2.setLocalDescription(omerSessDes);

  pc2.setRemoteDescription(deepSessDes);






}


function hangup(){
  Deep.disabled = true;
  hangupButton.disabled = true;
  Omer.disabled = false;
}
