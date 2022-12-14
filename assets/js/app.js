/* 
    render playlist
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $(".playlist");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
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
  isRandom: false,
  isRepeat: false,
  songs: [
    {
      name: "Rung động",
      singer: "Dương Eward",
      image: "./assets/image/Rung Dong - Duong Edward.jpg",
      path: "./assets/music/Rung Dong - Duong Edward.mp3",
    },
    {
      name: "Yêu người có ước mơ",
      singer: "Bùi Trường Linh",
      image: "./assets/image/YeuNguoiCoUocMo-Buitruonglinh.jpg",
      path: "./assets/music/YeuNguoiCoUocMo-Buitruonglinh.mp3",
    },
    {
      name: "Chuyện đôi ta",
      singer: "Emceee L, Muội",
      image: "./assets/image/Chuyện Đôi Ta - Emcee L, Muộii.jpg",
      path: "./assets/music/Chuyện Đôi Ta - Emcee L, Muộii.mp3",
    },
    {
      name: "Và ngày nào đó",
      singer: "Trung Quân Idol",
      image: "./assets/image/Va Ngay Nao Do - Trung Quan.jpg",
      path: "./assets/music/Va Ngay Nao Do - Trung Quan.mp3",
    },
    {
      name: "Sao cũng được",
      singer: "Binz",
      image: "./assets/image/Sao-Cung-Duoc-Binz.jpg",
      path: "./assets/music/Sao-Cung-Duoc-Binz.mp3",
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
      name: "Trò đùa",
      singer: "Châu Khải Phong",
      image: "./assets/image/TroDua-ChauKhaiPhongQuangDangTran.jpg",
      path: "./assets/music/TroDua-ChauKhaiPhongQuangDangTran.mp3",
    },
    {
      name: "Anh chưa thương em đến vậy đâu",
      singer: "Lady Mây",
      image: "./assets/image/anhchuathuongemdenvaydau.jpg",
      path: "./assets/music/Anh-Chua-Thuong-Em-Den-Vay-Dau-Lady-May.mp3",
    },
    {
      name: "Chưa quên người yêu cũ",
      singer: "Hà Nhi",
      image: "./assets/image/ChuaQuenNguoiYeuCu-HaNhi.jpg",
      path: "./assets/music/ChuaQuenNguoiYeuCu-HaNhi.mp3",
    },
    {
      name: "Một ngàn nỗi đau",
      singer: "Văn Mai Hương - Hứa Kim Tuyền",
      image: "./assets/image/MotNganNoiDau-VanMaiHuongHuaKimTuyen.jpg",
      path: "./assets/music/MotNganNoiDau-VanMaiHuongHuaKimTuyen.mp3",
    },
    {
      name: "Tự tình 2",
      singer: "Trung Quân Idol",
      image: "./assets/image/TuTinh2.jpg",
      path: "./assets/music/TuTinh2LiveAtSoulOfTheForest-TrungQuanIdol.mp3",
    },
  ],

  //render
  renderHTML: function () {
    const htmls = this.songs.map(function (song, index) {
      return `
            <div class="song ${
              index === app.currentIndex ? "active" : ""
            } "  data-index = ${index}>
                <div class="thumb" style="background-image: url('${
                  song.image
                }');" >
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
    playlist.innerHTML = htmls.join("");
  },

  //handle event
  handleEvent: function () {
    // thu nhỏ phóng to CD
    const cdWidth = $(".cd").offsetWidth;
    document.onscroll = function () {
      const scrollToTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollToTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    // xử lý CD quay / dừng
    let rotate360 = [{ transform: "rotate(360deg)" }];
    var cdThumbRotate = cdThumb.animate(rotate360, {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbRotate.pause();
    // play song
    playBtn.onclick = function () {
      if (app.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    //bài hát được phát
    audio.onplay = function () {
      app.isPlaying = true;
      player.classList.add("playing");
      cd.classList.add("active");
      cdThumbRotate.play();
    };
    //bài hát bị dừng
    audio.onpause = function () {
      app.isPlaying = false;
      player.classList.remove("playing");
      cdThumbRotate.pause();
    };
    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        ); // % số giây hiện tại / tổng độ dài
        progress.value = progressPercent;
      }
    };
    // Xử lý khi tua songs
    progress.oninput = function (e) {
      const seekTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    };
    //khi ấn nút next
    nextBtn.onclick = function () {
      if (app.isRandom) {
        app.playRandom();
      } else {
        app.nextSong();
      }
      audio.play();
      app.renderHTML();
      app.scrollToActive();
    };
    //khi ấn nút prev
    prevBtn.onclick = function () {
      if (app.isRandom) {
        app.playRandom();
      } else {
        app.prevSong();
      }
      audio.play();
      app.renderHTML();
      app.scrollToActive();
    };
    // khi ấn nút random bật tắt random
    randomBtn.onclick = function () {
      app.isRandom = !app.isRandom;
      randomBtn.classList.toggle("active", app.isRandom);
    };
    // Xử lý khi songs ended: khi hết bài nếu chọn repeat thì lặp lại chính nó còn kh thì next
    audio.onended = function () {
      if (app.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    //Xử lý lặp lại bài hát
    repeatBtn.onclick = function () {
      app.isRepeat = !app.isRepeat;
      repeatBtn.classList.toggle("active", app.isRepeat);
    };
    // Lắng nghe click vào playlist, e: eventv e.target: chọn đúng cái mục tiêu đó
    playlist.onclick = function (e) {
      // xử lý khi click vào song
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        if (songNode) {
          app.currentIndex = +songNode.dataset.index;
          app.loadCurrentSong();
          app.renderHTML();
          audio.play();
        }
      }
    };
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = `${this.currentSong.path}`;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex <= 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandom: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  scrollToActive: function () {
    if (
      app.currentIndex == 0 ||
      app.currentIndex == 1 ||
      app.currentIndex == 2
    ) {
      setTimeout(() => {
        $(".song.active").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 300);
    } else {
      setTimeout(() => {
        $(".song.active").scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  },
  start: function () {
    this.renderHTML();
    this.handleEvent();
    this.defineProperties();
    this.loadCurrentSong();
  },
};

app.start();
