/* 
    render playlist
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $(".playlist");
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const songs = [
  {
    name: "Anh yêu em cực",
    singer: "Linh Thộn - Minh Vũ",
    image: "./assets/image/AnhYeuEmCuc-LinhThonMinhVu.jpg",
    path: "./assets/music/AnhYeuEmCuc-LinhThonMinhVu.mp3",
  },
  {
    name: "Chuyện đôi ta",
    singer: "Emceee L, Muội",
    image: "./assets/image/Chuyện Đôi Ta - Emcee L, Muộii.jpg",
    path: "./assets/music/Chuyện Đôi Ta - Emcee L, Muộii.mp3",
  },
  {
    name: "Có em",
    singer: "Madihu - LowG",
    image: "./assets/image/CoEm-MadihuLowG.jpg",
    path: "./assets/music/CoEm-MadihuLowG.mp3",
  },
  {
    name: "Cố giang tình",
    singer: "X2X",
    image: "./assets/image/CoGiangTinh-X2X.jpg",
    path: "./assets/music/CoGiangTinhBalladVersion-X2X.mp3",
  },
  {
    name: "Đáp án cuối cùng",
    singer: "Quan AP",
    image: "./assets/image/DapAnCuoiCung-QuanAP.jpg",
    path: "./assets/music/DapAnCuoiCung-QuanAP.mp3",
  },
  {
    name: "Em bỏ hút thuốc chưa",
    singer: "Bích Phương",
    image: "./assets/image/embohutthuocchua-BichPhuong.jpg",
    path: "./assets/music/EmBoHutThuocChua-BichPhuong.mp3",
  },
  {
    name: "Say",
    singer: "Lena Lena",
    image: "./assets/image/Say-LenaLenaTRI.jpg",
    path: "./assets/music/Say-LenaLenaTRI-6272674.mp3",
  },
  {
    name: "Tán gái 606",
    singer: "Low G",
    image: "./assets/image/TanGai606-LowG.jpg",
    path: "./assets/music/TanGai606-LowG.mp3",
  },
  {
    name: "Trò đùa",
    singer: "Châu Khải Phong",
    image: "./assets/image/TroDua-ChauKhaiPhongQuangDangTran.jpg",
    path: "./assets/music/TroDua-ChauKhaiPhongQuangDangTran.mp3",
  },
  {
    name: "Waiting For You",
    singer: "MONO",
    image: "./assets/image/Waitingforyou-Mono.jpg",
    path: "./assets/music/WaitingForYou-MONO.mp3",
  },
];

const app = {
    currentIndex: 0,
    isPlaying: false,
  songs: [
    {
      name: "Anh yêu em cực",
      singer: "Linh Thộn - Minh Vũ",
      image: "./assets/image/AnhYeuEmCuc-LinhThonMinhVu.jpg",
      path: "./assets/music/AnhYeuEmCuc-LinhThonMinhVu.mp3",
    },
    {
      name: "Chuyện đôi ta",
      singer: "Emceee L, Muội",
      image: "./assets/image/Chuyện Đôi Ta - Emcee L, Muộii.jpg",
      path: "./assets/music/Chuyện Đôi Ta - Emcee L, Muộii.mp3",
    },
    {
      name: "Có em",
      singer: "Madihu - LowG",
      image: "./assets/image/CoEm-MadihuLowG.jpg",
      path: "./assets/music/CoEm-MadihuLowG.mp3",
    },
    {
      name: "Cố giang tình",
      singer: "X2X",
      image: "./assets/image/CoGiangTinh-X2X.jpg",
      path: "./assets/music/CoGiangTinhBalladVersion-X2X.mp3",
    },
    {
      name: "Đáp án cuối cùng",
      singer: "Quan AP",
      image: "./assets/image/DapAnCuoiCung-QuanAP.jpg",
      path: "./assets/music/DapAnCuoiCung-QuanAP.mp3",
    },
    {
      name: "Em bỏ hút thuốc chưa",
      singer: "Bích Phương",
      image: "./assets/image/embohutthuocchua-BichPhuong.jpg",
      path: "./assets/music/EmBoHutThuocChua-BichPhuong.mp3",
    },
    {
      name: "Say",
      singer: "Lena Lena",
      image: "./assets/image/Say-LenaLenaTRI.jpg",
      path: "./assets/music/Say-LenaLenaTRI-6272674.mp3",
    },
    {
      name: "Tán gái 606",
      singer: "Low G",
      image: "./assets/image/TanGai606-LowG.jpg",
      path: "./assets/music/TanGai606-LowG.mp3",
    },
    {
      name: "Trò đùa",
      singer: "Châu Khải Phong",
      image: "./assets/image/TroDua-ChauKhaiPhongQuangDangTran.jpg",
      path: "./assets/music/TroDua-ChauKhaiPhongQuangDangTran.mp3",
    },
    {
      name: "Waiting For You",
      singer: "MONO",
      image: "./assets/image/Waitingforyou-Mono.jpg",
      path: "./assets/music/WaitingForYou-MONO.mp3",
    },
  ],

  //render
  renderHTML: function () {
    const htmls = this.songs.map(function (song) {
      return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}');" >
                </div>
                <div class="body">
                    <div class="title">${song.name}</div>
                    <div class="author">${song.singer}</div>
                </div>
                <div class="option">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            `;
    });
    playlist.innerHTML = htmls.join('')
  },

  //handle event
  handleEvent: function() {
    // thu nhỏ phóng to CD
    const cdWidth = $('.cd').offsetWidth
    document.onscroll = function() {
        const scrollToTop = window.scrollY || document.documentElement.scrollTop
        const newCdWidth = cdWidth - scrollToTop 
        cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
        cd.style.opacity = newCdWidth / cdWidth
    }
    // xử lý CD quay / dừng
    const cdThumbRotate = cdThumb.animate(
        [{transform: 'rotate(360deg)'}],
        {duration: 10000,
        interation: Infinity
        }
    )
    cdThumbRotate.pause()
    // play song
    playBtn.onclick = function() {
        if(app.isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
    }
    //bài hát được phát
    audio.onplay = function() {
        app.isPlaying = true
        player.classList.add('playing')
        cdThumbRotate.play()
    }
    //bài hát bị dừng
    audio.onpause = function() {
        app.isPlaying = false
        player.classList.remove('playing')
        cdThumbRotate.pause()
    }
    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function() {
        if(audio.duration) {
          const progressPercent = Math.floor(audio.currentTime / audio.duration *100) // % số giây hiện tại / tổng độ dài
          progress.value = progressPercent
        }
      }
      // Xử lý khi tua songs
      progress.oninput = function(e) {
       const seekTime = (e.target.value / 100) * audio.duration
       audio.currentTime = seekTime
      }
      //khi ấn nút next
      nextBtn.onclick = function() {
        app.nextSong()
        audio.play()
      }
      //khi ấn nút prev
      prevBtn.onclick = function() {
        app.prevSong()
        audio.play()
      }
  },
  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
        get: function() {
            return this.songs[this.currentIndex]
        }
    })
  },
  loadCurrentSong: function() {
    heading.textContent = this.currentSong.name
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')` 
    audio.src = `${this.currentSong.path}`
  },
  nextSong: function() {
    this.currentIndex++
    if(this.currentIndex >= this.songs.length) {
        this.currentIndex = 0
    }
    this.loadCurrentSong()
  },
  prevSong: function() {
    this.currentIndex--
    if(this.currentIndex <= 0) {
        this.currentIndex = this.songs.length - 1
    }
    this.loadCurrentSong()
  },
  start: function () {
    this.renderHTML();
    this.handleEvent()
    this.defineProperties()
    this.loadCurrentSong()
  },
};

app.start();
