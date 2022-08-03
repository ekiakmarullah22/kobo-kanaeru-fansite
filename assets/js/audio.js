// get id
let previous = document.querySelector("#pre");
let previous_responsive = document.querySelector("#pre_responsive");
let next = document.querySelector("#next");
let next_responsive = document.querySelector("#next_responsive");
let play = document.querySelector("#play");
let play_responsive = document.querySelector("#play_responsive");
let title = document.querySelector("#title");
let title_responsive = document.querySelector("#title_responsive");
let recent_volume = document.querySelector('#volume');
let volume_show =  document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let track_image_responsive = document.querySelector("#track_image_responsive");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");
let artist_responsive = document.querySelector("#artist_responsive");

let timer
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create an audio element in HTML
let track = document.createElement("audio");

// All song list
let all_song = [

  {
    name: "Kobo Karaoke Playlist",
    path: "./assets/audio/y2mate.com - Kobo Kanaeru Sing Playlist.mp3",
    img: "./assets/images/audioPoster/kobo playlist.jpeg",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Mantra Hujan Original Version",
    path: "./assets/audio/ORIGINAL_SONG_MVMantra_Hujan_-_Ko_(getmp3.pro).mp3",
    img: "./assets/images/audioPoster/mantra hujan.jfif",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Kobo Kanaeru  Gyutto ぎゅっと",
    path: "./assets/audio/y2mate.com - Kobo Kanaeru  Gyutto ぎゅっと  accoustic singing stream.mp3",
    img: "./assets/images/audioPoster/kobo gyutto.jfif",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Mantra Hujan Acoustic Version",
    path: "./assets/audio/y2mate.com - Kobo Kanaeru  Mantra Hujan Acoustic Version.mp3",
    img: "./assets/images/audioPoster/mantra hujan akustik.jfif",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Yoru ni Kakeru by YOASOBI",
    path: "./assets/audio/y2mate.com - Kobo Kanaeru sings Yoru ni Kakeru by YOASOBI With Lyric.mp3",
    img: "./assets/images/audioPoster/kobo yoro ni kakeru.jfif",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Lemon  Kenshi Yonezu",
    path: "./assets/audio/y2mate.com - Kobo sing Lemon  Kenshi Yonezu.mp3",
    img: "./assets/images/audioPoster/kobo lemon.jfif",
    singer: "Kobo Kanaeru"
  },

  {
    name: "Ninja Re Bang Bang",
    path: "./assets/audio/y2mate.com - Ninja Re Bang Bang  Kobo Kanaeru.mp3",
    img: "./assets/images/audioPoster/kobo ninja re bang bang.jfif",
    singer: "Kobo Kanaeru"
  }

];

// function to load the music track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();
  track.src = all_song[index_no].path;
  title.innerHTML = all_song[index_no].name;
  title_responsive.innerHTML = all_song[index_no].name;
  track_image.src = all_song[index_no].img;
  track_image_responsive.src = all_song[index_no].img;
  artist.innerHTML = all_song[index_no].singer;
  artist_responsive.innerHTML = all_song[index_no].singer;
  track.load();

  total.innerHTML = all_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
}

load_track(index_no);

// mute music
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// reset music slider
function reset_slider() {
  slider.value = 0;
}

//function for checking music status ? play or not
function just_play() {
  if(playing_song == false) {
    playSong();
  } else {
    pauseSong();
  }
}

// function for play the music
function playSong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  play_responsive.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//function for pause the music
function pauseSong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  play_responsive.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// function for next the music
function next_song() {
  if(index_no < all_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playSong();
  } else {
    index_no = 0;
    load_track(index_no);
    playSong();
  }
}

// function for previous the music
function previous_song() {
  if(index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playSong();
  } else {
    index_no = all_song.length;
    load_track(index_no);
    playSong();
  }
}

// function for change the volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// function for change the duration of the current music
function duration_change() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

function autoplay_switch() {
  if(autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(255, 255, 255, 0.2)";
  } else {
    autoplay = 1;
    auto_play.style.background = "#167ac6";
  }
}

function range_slider() {
  let position = 0;
  if(!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if(track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    play_responsive.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if(autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playSong();
    }
  }
}