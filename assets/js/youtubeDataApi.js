//get dom
let totalViews = document.querySelector('#yt-viewTime');
let totalVideos = document.querySelector('#yt-totalVideo');
let totalSubscribers = document.querySelector('#yt-subs');
let yt_thumbnail = document.querySelector(".yt-thumbnail");
let yt_name = document.querySelector('#yt-name');
let yt_video = document.querySelector('#yt-video');
let date = document.querySelector("#date");
//script for count youtube subscribers
const youtubeApiKey = 'AIzaSyAUSLGUUa1HI2fUE9_FfN4i5d-BvJWeeI0';
const youtubeChannelID = 'UCjLEmnpCNeisMxy134KPwWw';
const maxResults = 2;

// date
const getDate = new Date();
date.innerHTML = `<i class="fa fa-dot-circle-o text-danger me-2" aria-hidden="true"></i>Latest update on ${getDate}`;

//Youtube counter
let koboKanaeruSubCount = new Odometer({
  //choose dom 
  el: document.querySelector("#yt-subs"),
  format: ',ddd',
  theme: 'default'
});

//watch time
let koboKanaeruWatchTimeCount = new Odometer({
  el: document.querySelector("#yt-viewTime"),
  format: ',ddd',
  theme: 'default'
});

//total Video
let koboKanaeruTotalVideo = new Odometer({
  el: document.querySelector("#yt-totalVideo"),
  format: ',ddd',
  theme: 'default'
});

//get youtube channel data of kobo kanaeru
youtubeCounter([koboKanaeruSubCount, koboKanaeruWatchTimeCount, koboKanaeruTotalVideo]);


//make the function for grabbing youtube data api statistics
function youtubeCounter([channel]) {
  let youtubeApiURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeChannelID}&key=${youtubeApiKey}`;

  $.getJSON(youtubeApiURL, function(result) {
    console.log(youtubeApiURL);
    koboKanaeruSubCount.update(result['items'][0]['statistics']['subscriberCount']);
    koboKanaeruWatchTimeCount.update(result['items'][0]['statistics']['viewCount']);
    koboKanaeruTotalVideo.update(result['items'][0]['statistics']['videoCount']);
  })
}



//fetch youtube statistics data
// fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeChannelID}&key=${youtubeApiKey}`)
// .then(response => {
//   return response.json()
// })
// .then(data => {
//   // //console.log(data.items[0].statistics);
//   // // totalViews.innerHTML += "Total Views : "+data.items[0].statistics.viewCount+"<br/>";
//   // // totalVideos.innerHTML += "Total Videos :"+data.items[0].statistics.videoCount+"<br/>";
//   // let totalSubs = data.items[0].statistics.subscriberCount;
//   // let totalViewTime = data.items[0].statistics.viewCount;
//   // const subscribers = new Intl.NumberFormat('de-DE', {
//   //   style: 'currency',
//   //   currency: 'IDR',
//   //   }).formatToParts(totalSubs).map(
//   //       p => p.type != 'literal' && p.type != 'currency' ? p.value : ''
//   //   ).join('')
    
//   //   const watchTime = new Intl.NumberFormat('de-DE', {
//   //       style: 'currency',
//   //       currency: 'IDR',
//   //       }).formatToParts(totalViewTime).map(
//   //           p => p.type != 'literal' && p.type != 'currency' ? p.value : ''
//   //       ).join('')

//   // totalSubscribers.innerHTML += "Subscribers :"+" "+subscribers;


//   // totalViews.innerHTML += "Watch Time :"+" "+watchTime; 

//   // totalVideos.innerHTML += "Amount of Videos :"+" "+data.items[0].statistics.videoCount;
// })

//fetch youtube channel data
fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${youtubeChannelID}&key=${youtubeApiKey}`)
.then(response => {
  if(response.ok) {
    return response.json()
    .then(data => {
      //console.log(data);
      yt_thumbnail.src = data.items[0].snippet.thumbnails.default.url;
      yt_name.innerHTML = data.items[0].snippet.title;
    })
    
  }

  else {
    yt_thumbnail.src = "../assets/images/kobo.png";
    yt_thumbnail.style.marginTop = "605px";
    yt_name.innerHTML = "Kobo Kanaeru Ch. hololive-ID";
  }
})

//fetch youtube video data
// fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${youtubeChannelID}&maxResults=${maxResults}&key=${youtubeApiKey}`)
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   Object.entries(data.items).forEach(([key, value]) => {
//     //console.log(key, value.id.videoId);
//     let iframe = document.createElement("iframe"); //create element
//     let width = document.createAttribute("width");
//     let height = document.createAttribute("height");
//     let frameborder = document.createAttribute("frameborder");
//     let allowfullscreen = document.createAttribute("allowfullscreen");
//     let src = document.createAttribute("src");
//     src.value = `https://www.youtube.com/embed/${value.id.videoId}`;
//     allowfullscreen.value = "true";
//     frameborder.value = "0";
//     height.value = "150";
//     width.value = "280";
//     yt_video.appendChild(iframe);
//     iframe.setAttributeNode(width);
//     iframe.setAttributeNode(height);
//     iframe.setAttributeNode(frameborder);
//     iframe.setAttributeNode(allowfullscreen);
//     iframe.setAttributeNode(src);
//   })
// })

let youtubeApiKeyQueryVideo = 'AIzaSyDMTX10IrF3EH9KrUdqj6iq9l4VUPrufQI';

fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${youtubeChannelID}&maxResults=${maxResults}&key=${youtubeApiKeyQueryVideo}`)
	.then(response => {
  		if(response.ok){
        return response.json()
        .then(data => {
            Object.entries(data.items).forEach(([key, value]) => {
              //console.log(key, value.id.videoId);
              let iframe = document.createElement("iframe"); //create element
              let width = document.createAttribute("width");
              let height = document.createAttribute("height");
              let frameborder = document.createAttribute("frameborder");
              let allowfullscreen = document.createAttribute("allowfullscreen");
              let src = document.createAttribute("src");
              src.value = `https://www.youtube.com/embed/${value.id.videoId}`;
              allowfullscreen.value = "true";
              frameborder.value = "0";
              height.value = "150";
              width.value = "280";
              yt_video.appendChild(iframe);
              iframe.setAttributeNode(width);
              iframe.setAttributeNode(height);
              iframe.setAttributeNode(frameborder);
              iframe.setAttributeNode(allowfullscreen);
              iframe.setAttributeNode(src);
            })
          })
      }
        
        else{
          //take yt video and delete them
          document.getElementById("yt-video-row-title").remove();
          document.getElementById("yt-video-row").remove();
          document.querySelector("#holoID_Members_mobile").style.marginTop = "365px";
    	  }
})
