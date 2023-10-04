//song list
let All_song = [
    {
      name: "01 - Tyd",
      path: "songs/01.Herbal Gucci Ft Jimmy Nani - Tyd.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci Ft Jimmy & Nani"
    },
    {
      name: "02 - Foute",
      path: "songs/02.Herbal Gucci Ft Minette - Foute.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci Ft Minette"
    },
    {
      name: "03 - Punchline Tot Die Son Op Kom",
      path: "songs/03.Herbal Gucci Ft Curvy The Great & Willy Geezy - Punchline Tot Die Son Op Kom.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci Ft Curvy The Great & Willy Geezy"
    },
    {
      name: "04 - Hartloos",
      path: "songs/04.Herbal Gucci - Hartloos.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci"
    },
    {
      name: "05 - Bly Sterk",
      path: "songs/05.Herbal Gucci Ft Riicky Walker - Bly Sterk.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci Ft Riicky Walker"
    },
    {
      name: "06 - Skreeu Vir Help",
      path: "songs/06.Herbal Gucci - Skreeu Vir Help.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal-Gucci"
    },
    {
      name: "07 - Vêr Vir My",
      path: "songs/07.Herbal Gucci Ft Curvy The Great - Vêr Vir My.mp3",
      img: "images/Vir DIe Wolwe thumbnail.jpg",
      singer: "Herbal Gucci Ft Curvy The Great"
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
 