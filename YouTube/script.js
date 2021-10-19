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
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyDx9uDNrXDdFSZbDYNenVZuiCCuDTfjilk&maxResults=20`
  );

  let data = await res.json();

  console.log(`data`, data);

  appendVideos(data.items);
}

// searchVideos();

function appendVideos(video_data) {
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
