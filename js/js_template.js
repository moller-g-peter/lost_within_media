



var mainVideo = document.getElementById("mainVideo");
var staticVideo = document.getElementById("staticVideo");


$('.greenButton').hide();
$('#staticVideo').prop('muted', 'true');
// $('#mainVideo').prop('muted', 'false');

// STATIC VIDEO
function playStaticVideo() {
  staticVideo.play();
  staticVideo.loop = true;
  // staticVideo.load();
}

// MAIN VIDEO FUNCTIONS
function playMainVideo() {
  mainVideo.play();
  mainVideo.loop = false;
}



$('.blackButton').click(function(ev){
	$('#staticVideo').hide();
	$('.blackButton').hide();
	$('.greenButton').show();
  // $('#mainVideo').prop('muted', 'false');
  playMainVideo();
  // console.log("playMainVideo :", playMainVideo);
	// $("#mainVideo").prop('muted', !$("#mainVideo").prop('muted'));

	// if ($('#mainVideo').prop('muted', 'true')){
	// 	$(this).prop('muted', 'false');
	// }
 //  else {
	// 	$(this).prop('muted', 'true');
	// }

});




$('.greenButton').click(function(evII){
	// $('#mainVideo').hide();
	$('#staticVideo').show();
	$('.blackButton').show();
	$('.greenButton').hide();
  $('#mainVideo').prop('muted', 'true');
  console.log("evII :", evII);
	// if (!$('#mainVideo').prop('muted')){
	// 	$(this).prop('muted', 'true');
	// }
 //  else {
	// 	$(this).prop('muted', 'false');
	// }

});

playStaticVideo();




















// function pauseVid() {
//    mainVideo.pause();
// }
// function pauseStaticVideo() {
//    staticVideo.pause();
// }