function play(){
    var videos = document.getElementById("myvid");
    videos.play()
        document.getElementById("play").style.display = "none";
        document.getElementById("pause").style.display = "block";
    
}
function pause(){
    var videos = document.getElementById("myvid");
    videos.pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
}

function stop(){
    var videos = document.getElementById("myvid");
    videos.currentTime = 0; 
    videos.pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
    
}
function mute(){
    var videos = document.getElementById("myvid");
    videos.muted = true;
    document.getElementById("mute").style.display = "none";
    document.getElementById("unmute").style.display = "block";
}
function unmute(){
    var videos = document.getElementById("myvid");
    videos.muted = false;
    document.getElementById("unmute").style.display = "none";
    document.getElementById("mute").style.display = "block";
}
 function backward(){
    var videos = document.getElementById("myvid");
    videos.currentTime = 0;
    videos.play()
 }
 function forward(){
    var videos = document.getElementById("myvid");
    videos.currentTime = 1004;
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
    videos.stop();
    
 }
function back5(){
    var videos = document.getElementById("myvid");
    videos.currentTime = videos.currentTime - 5
}
function front5(){
    var videos = document.getElementById("myvid");
    videos.currentTime = videos.currentTime + 5
}

function screen(){
    var videos = document.getElementById("myvid");
    videos.requestFullscreen()
}

function changespeed(){
    var speed = document.getElementById("speed").value;
    var videos  = document.getElementById("myvid");
    videos.playbackRate = speed;
}
speed.addEventListener('input', changespeed);

function chgvol(){
    var vol = document.getElementById("volumeupdown").value;
    var videos  = document.getElementById("myvid");
    videos.volume = vol;
}
document.getElementById("volumeupdown").addEventListener('input', chgvol);
var vid,seekslider;
function intializePlayer(){
    vid = document.getElementById("myvid");
    seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");

    seekslider.addEventListener("change",vidSeek,false);
    vid.addEventListener("timeupdate",seektimeupdate,false);
    }
    window.onload = intializePlayer;
   
     function vidSeek(){
        var seekto = vid.duration * (seekslider.value / 100);
        vid.currentTime = seekto;
    }
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}


