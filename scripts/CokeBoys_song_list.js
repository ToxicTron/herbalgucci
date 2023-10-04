//song list
let All_song = [
    {
      name: "01 - All my niggers get money",
      path: "songs/Coke Boys/Coke-Boys - All my niggers get money.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "02 - Free flow",
      path: "songs/Coke Boys/Coke-Boys - Free flow.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "03 - How do I know",
      path: "songs/Coke Boys/Coke-Boys - How do I know.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "04 - Jou kind",
      path: "songs/Coke Boys/Coke-Boys - Jou kind.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "05 - Me and you",
      path: "songs/Coke Boys/Coke-Boys - Me and you.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "06 - Moen my nie judge nie",
      path: "songs/Coke Boys/Coke-Boys - Moen my nie judge nie.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Yaki-B"
    },
    {
      name: "07 - My hood right",
      path: "songs/Coke Boys/Coke-Boys - My hood right.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "08 - Soek jou na aan my",
      path: "songs/Coke Boys/Coke-Boys - Soek jou na aan my.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "09 - Sy like vir ons",
      path: "songs/Coke Boys/Coke-Boys - Sy like vir ons.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "10 - This is what I do",
      path: "songs/Coke Boys/Coke-Boys - This is what I do.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "11 - 100 op 100",
      path: "songs/Coke Boys/Coke-Boys -100 op 100.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys"
    },
    {
      name: "12 - Winning team",
      path: "songs/Coke Boys/Coke-Boys ft Coke-Queen & Tylor Tonic - Winning team.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Coke-Queen & Tylor Tonic"
    },
    {
      name: "13 - Pic saam met ons",
      path: "songs/Coke Boys/Coke-Boys ft Luciano - Pic saam met ons.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Luciano"
    },
    {
      name: "14 - Turn it up",
      path: "songs/Coke Boys/Coke-Boys ft Skinny-Divas - Turn it up.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Skinny-Divas - Turn it up"
    },
    {
      name: "15 - Ver weg",
      path: "songs/Coke Boys/Coke-Boys ft Yaki-B - Ver weg.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Yaki-B"
    },
    {
      name: "16 - Faded",
      path: "songs/Coke Boys/Coke-Boys ft Young Toonz - Faded.mp3",
      img: "images/Coke Boys.jpg",
      singer: "Coke-Boys ft Young Toonz"
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
 