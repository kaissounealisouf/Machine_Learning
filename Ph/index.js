const video =document.querySelector("video")
const width =400
const height=300
const canvas = document.querySelector("canvas");
canvas.width=width;
canvas.height=height;
console.table(canvas.width);
const ctx=canvas.getContext("2d");
console.table(ctx)

// Let us get the user's camera data by building an object
 const constraints={
 audio:false,
 video:{
    width,
    height,
 }

}

//Define an object called <<<Navigator.Mediadevices check it out MDN
//  https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API 
// view Docs https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
    // >>
navigator.mediaDevices.getUserMedia(constraints).then(function (MediaStreamConstraints) {
    video.srcObject = MediaStreamConstraints;
    video.onloadedmetadata = function (e) {
        video.play();
        setInterval(drawVideoFrame, 100);
    };

}).catch((err)=>{
    console.log(err);
})
  


  function drawVideoFrame() {
    ctx.drawImage(video, 0, 0, width, height);
    // or do other stuff with the video data
  }
  