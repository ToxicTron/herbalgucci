//song list
let All_song = [
    {
      name: "01 - 'n Toxic ding",
      path: "songs/Toxic Boys/Toxic Boys - 'n Toxic ding.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys"
    },
    {
      name: "02 - Celebration",
      path: "songs/Toxic Boys/Toxic Boys - Celebration.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys"
    },
    {
      name: "03 - Undercover",
      path: "songs/Toxic Boys/Toxic Boys ft Stigo-G - Undercover.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys ft Stigo-G"
    },
    {
      name: "04 - Toxic Empire 11",
      path: "songs/Toxic Boys/Toxic Boys ft Sussa - Toxic Empire 11.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys ft Sussa"
    },
    {
      name: "05 - Toxic Empire 12",
      path: "songs/Toxic Boys/Toxic Boys - Toxic Empire 12.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys"
    },
    {
      name: "06 - Toxic Empire 13",
      path: "songs/Toxic Boys/Toxic Boys ft Sussa - Toxic Empire 13.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys ft Sussa"
    },
    {
      name: "07 - Toxic Empire 14",
      path: "songs/Toxic Boys/Toxic Boys -Toxic Empire 14.mp3",
      img: "images/Toxic Boys.jpg",
      singer: "Toxic Boys"
    }
    ]; 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) { let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 