
var mainVideo = document.getElementById("mainVideo");
var staticVideo = document.getElementById("staticVideo");


$('.greenButton').hide();
$('#staticVideo').prop('muted', 'false');

// STATIC VIDEO
function playStaticVideo() {
  staticVideo.play();
  staticVideo.loop = true;
  // staticVideo.load();
}

// MAIN VIDEO FUNCTIONS
function playMainVideo() {
  mainVideo.play();
  mainVideo.loop = true;
}



$('.blackButton').click(function(){
	$('#staticVideo').hide();
	$('.blackButton').hide();
	$('.greenButton').show();
	playMainVideo();

	// $("#mainVideo").prop('muted', !$("#mainVideo").prop('muted'));

	if ($('#mainVideo').prop('muted')){
		$(this).prop('muted', 'false');
	} else {
		$(this).prop('muted', 'true');
	}

});




$('.greenButton').click(function(){
	// $('#mainVideo').hide();
	$('#staticVideo').show();
	$('.blackButton').show();
	$('.greenButton').hide();

	// if ($('#mainVideo').prop('muted', 'false')){
	// 	$(this).prop('muted', 'true');
	// } else {
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