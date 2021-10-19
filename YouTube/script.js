var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};

// ------------------------ YT API ------------------------------ //

///  AIzaSyAHXKNTiyvqwO1-BZuhWHyuwdgWPFve21g  <-- API Key (YouTube)

let videos = document.getElementById("videos");

async function searchVideos() {
  // q = csk
  // type = video
  // api key =  AIzaSyAHXKNTiyvqwO1-BZuhWHyuwdgWPFve21g  <-- API Key (YouTube)

  let query = document.getElementById("query").value;

  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDx9uDNrXDdFSZbDYNenVZuiCCuDTfjilk&maxResults=20&safeSearch=strict&videoCaption=closedCaption&part=snippet&chart=mostPopular&regionCode=NZ`
    // `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDx9uDNrXDdFSZbDYNenVZuiCCuDTfjilk&maxResults=20`   
  );

  let data = await res.json();

  console.log(`data`, data);

  appendVideos(data.items);
}

//----------------------------------------------------------

// searchVideos();

/* function appendVideos(video_data) {
  videos.innerHTML = null;

  video_data.forEach(({ id: { videoId } }) => {
    // console.log(videoId);

    let div = document.createElement("div");

    // embed YT video on our WEB

    div.innerHTML = `<iframe width="250" height="155" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    div.style.marginTop = "10px";
    videos.append(div);
  });
}
 */

//----------------------------------------------------------

function appendVideos(video_data) {
  videos.innerHTML = null;

  video_data.forEach(
    ({ id: { videoId }, snippet: { title }, snippet: { channelTitle } }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "videoAPIBox");

      let vidDiv = document.createElement("div");
      vidDiv.innerHTML = `<iframe width="250" height="155" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      let video_titleDiv = document.createElement("div");
      video_titleDiv.setAttribute("class", "video_titleDiv");
      let video_title = document.createElement("p");
      video_title.innerText = title;
      video_titleDiv.append(video_title);

      let channel_titleDiv = document.createElement("div");
      channel_titleDiv.setAttribute("class", "channel_titleDiv");
      let channel_title = document.createElement("p");
      channel_title.innerText = channelTitle;

      channel_titleDiv.append(channel_title);
      div.append(vidDiv, video_titleDiv, channel_titleDiv);
      videos.append(div);
    }
  );
}

// --------------------------------------------------------------

async function mostPopularVideo() {
  //
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?type=video&key=AIzaSyDx9uDNrXDdFSZbDYNenVZuiCCuDTfjilk&maxResults=20&safeSearch=strict&videoCaption=closedCaption&part=snippet&chart=mostPopular&regionCode=NZ`
  );

  let data = await res.json();
  showVideoInBody(data.items);
}
function showVideoInBody(data) {
  videos.innerHTML = null;

  console.log("Data: ", data);

  data.forEach(
    ({ id: { videoId }, snippet: { title }, snippet: { channelTitle } }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "videoAPIBox");

      let vidDiv = document.createElement("div");
      vidDiv.innerHTML = `<iframe src=https://www.youtube.com/embed/${videoId} title="YouTube video" frameBorder="0" width="250" height="155" allow="fullscreen"></iframe>`;

      let video_titleDiv = document.createElement("div");
      video_titleDiv.setAttribute("class", "video_titleDiv");
      let video_title = document.createElement("p");
      video_title.innerText = title;
      video_titleDiv.append(video_title);

      let channel_titleDiv = document.createElement("div");
      channel_titleDiv.setAttribute("class", "channel_titleDiv");
      let channel_title = document.createElement("p");
      channel_title.innerText = channelTitle;

      channel_titleDiv.append(channel_title);
      div.append(vidDiv, video_titleDiv, channel_titleDiv);
      videos.append(div);
    }
  );
}

mostPopularVideo();

//-------------------------------------------------------


