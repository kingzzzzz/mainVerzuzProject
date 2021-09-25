const songs = [
  {
    songName: "Halo",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 8607832,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=bnVUHWCynig",
    img: "https://i.scdn.co/image/ab67616d0000b2731912eed74324c0869be1bb7f"
  },
  {
    songName: "Irreplaceable",
    albumTitle: "B'Day",
    playCount: 4914414,
    releaseYear: 2006,
    youTubeLink: "https://www.youtube.com/watch?v=2EwViQxSJJQ",
    img:
      "https://img.discogs.com/kkl7-D2vhSYQm1rys5zk-fSb1yM=/fit-in/483x500/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-1165076-1312824188.jpeg.jpg"
  },
  {
    songName: "Single Ladies (Put a Ring on It)",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 5203841,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=4m1EFMoRFvY",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Single_Ladies_%28Put_a_Ring_on_It%29_cover.png/220px-Single_Ladies_%28Put_a_Ring_on_It%29_cover.png"
  },
  {
    songName: "Crazy In Love",
    albumTitle: "Dangerously In Love",
    playCount: 3752084,
    releaseYear: 2003,
    youTubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
    img:
      "https://m.media-amazon.com/images/M/MV5BYTU1ODdhMmEtZTBjNC00Yjk1LTkzNjItNDBjZjYwNDkxZmY2XkEyXkFqcGdeQXVyMjUwMjUzNDQ@._V1_.jpg"
  },
  {
    songName: "If I Were A Boy",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4562013,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=AWpsOqh8q0M",
    img:
      "https://images.genius.com/08ad8a706cdf142f1cd22919154b51a8.1000x1000x1.jpg"
  },
  {
    songName: "Sweet Dreams",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4940104,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=JlxByc0-V40",
    img:
      "https://img.discogs.com/Ry5k6LN8_gqPUEA0B-seUVb4Hvg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2526148-1288795794.jpeg.jpg"
  }
];
const mainDiv = document.querySelector(".row");
const songNameInput = document.getElementById("songNameInput");
const albumTitleInput = document.getElementById("albumTitleInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const youTubeLinkInput = document.getElementById("youTubeLinkInput");
const playCountInput = document.getElementById("playCountInput");
const imgInput = document.getElementById("imgInput");
const createButton = document.getElementById("addSong");
const updateButton = document.getElementById("updateSong");
let updateSongIndexArray;

function renderData() {
  mainDiv.innerHTML = "";
  for (let songIndex = 0; songIndex < songs.length; songIndex++) {
    const songListItem = document.createElement("div");
    songListItem.className = "col-sm-4 d-flex";
    songListItem.innerHTML = `

    <div class="card flex-fill mb-3">
    <img class="card-img-top" src="${songs[songIndex].img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${songs[songIndex].songName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Album Title: ${songs[songIndex].albumTitle}</li>
      <li class="list-group-item">Release Year: ${songs[songIndex].releaseYear}</li>
      <li class="list-group-item">Play Count: ${songs[songIndex].playCount}</li>
      <li class="list-group-item"><a href="${songs[songIndex].youTubeLink}" target="_blank">YouTube Video</a></li>
    </ul>
    <div class="card-body text-center">
      <button type="button" class="btn btn-danger deleteButton--${songIndex}">Delete</button>
      <button type="button" class="btn btn-secondary updateButton--${songIndex}">Update</button>
</div>
    `;
    mainDiv.append(songListItem);
  }
  //delete logic
  const deleteButtons = document.querySelectorAll(
    '[class^="btn btn-danger deleteButton--"]'
  );
  //console.log(deleteButtons);
  for (let btn of deleteButtons) {
    btn.addEventListener("click", function () {
      var buttonIndexArray = btn.className.split(
        "btn btn-danger deleteButton--"
      );
      console.log(buttonIndexArray);
      songs.splice(buttonIndexArray[1], 1);
      renderData();
    });
  }
  //create logic
  function createData() {
    const songName = songNameInput.value;
    console.log("songName", songName);
    const albumTitle = albumTitleInput.value;
    console.log("albumTitle", albumTitle);
    const releaseYear = releaseYearInput.value;
    console.log("releaseYear", releaseYear);
    const youTubeLink = youTubeLinkInput.value;
    console.log("youTubeLink: ", youTubeLink);
    const playCount = playCountInput.value;
    console.log("playCount", playCount);
    const img = imgInput.value;
    console.log("image address", img);
    const newSong = {
      songName,
      albumTitle,
      releaseYear,
      youTubeLink,
      playCount,
      img
    };
    console.log("new song", newSong);
    songs.push(newSong);
    songNameInput.value = "";
    albumTitleInput.value = "";
    releaseYearInput.value = "";
    youTubeLinkInput.value = "";
    playCountInput.value = "";
    imgInput.value = "";
    renderData();
    createButton.removeEventListener("click", createData);
  }
  createButton.addEventListener("click", createData);
}
renderData();
// Update Part A
const updateButtons = document.querySelectorAll(
  '[class^="btn btn-secondary updateButton--"]'
);
for (let btn of updateButtons) {
  btn.addEventListener("click", () => {
    //get the index number from the class
    updateSongIndexArray = btn.className.split(
      "btn btn-secondary updateButton--"
    );
    console.log(updateSongIndexArray);
    // get the song item from array
    var updateSongInfo = songs[updateSongIndexArray[1]];
    console.log(updateSongInfo);
    // setting the value property of the input tp the object key
    songNameInput.value = updateSongInfo.songName;
    albumTitleInput.value = updateSongInfo.albumTitle;
    releaseYearInput.value = updateSongInfo.releaseYear;
    youTubeLinkInput.value = updateSongInfo.youTubeLink;
    playCountInput.value = updateSongInfo.playCount;
    imgInput.value = updateSongInfo.img;
    //hide submit button and show update submit button
    createButton.classList.add("hidden");
    updateButton.classList.remove("hidden");
  });
}

// create function for updating the song array
function updateSong() {
  var updatedSong = {
    songName: songNameInput.value,
    albumTitle: albumTitleInput.value,
    releaseYear: releaseYearInput.value,
    youtubeLink: youTubeLinkInput.value,
    playCount: playCountInput.value,
    img: imgInput.value
  };
  // remove element and insert new updateSong into songs array
  songs.splice(updateSongIndexArray[1], 1, updatedSong);
  // switch buttons back
  updateButton.classList.add("hidden");
  createButton.classList.remove("hidden");
  // clear out the input
  songNameInput.value = "";
  albumTitleInput.value = "";
  releaseYearInput.value = "";
  youTubeLinkInput.value = "";
  playCountInput.value = "";
  imgInput.value = "";

  // re-render the updated data
  renderData();
}
updateButton.addEventListener("click", updateSong);
