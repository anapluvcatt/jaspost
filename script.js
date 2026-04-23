// script.js

const app = document.getElementById("app");

const products = [
  {
    title: "akun game",
    price: "Rp 600.000+",
    image: "akun1.jpg",
    desc: "log ggl bind tw sepaket Evo 5 max 3 tw max 4 anim medkit on sg lumut Evo lvl 6 trompet tinju evo + booyah bundle devil hunter biru on criminal emas on paradox on genji on obito on jordan on celana gajah coklat on celana cepcil on anggel merah + putih, jazz on animasi masuk 5 sky wing 5",
    sellerNumber: "6282266305388"
  },
  {
    title: "akun game",
    price: "Rp 95.000",
    image: "akun2.jpg",
    desc: "Plat tiga, Monsep, Emblem max, Skin bagus² User mid , Save 4h, Email fresh buatan ku,Full spek pm",
    sellerNumber: "6288804243746"
  },
  {
    title: "akun game",
    price: "Rp 1.100.0000",
    image: "akun3.jpg",
    desc: "Monsep allkos kgm #buy reff sell no reff",
    sellerNumber: "6283830898187"
  },
  {
    title: "akun game",
    price: "Rp 500.000+",
    image: "akun4.jpg",
    desc: "MONSEP  KGM, SKIN GAGAH LEGEND FREYA FANNY ASPI CC BRODY",
    sellerNumber: "6288268306286"
  },
  {
    title: "akun game",
    price: "Rp 150.000",
    image: "akun5.jpg",
    desc: "roblox datpol, summary 14k+ robux, knife mm2 evo fx limited 3k+ rbx, rambut banyak gagah, animasi ada 10 mahal, shirt ada 60+, pants ada 50+, knife effect mm2 ada 3, character zombie skeleton 500rbx+, mini plushie, game lain unchek, dll",
    sellerNumber: "6283164593872"
  },
  {
    title: "akun game",
    price: "Rp 270.000",
    image: "akun6.jpg",
    desc: "Ggl bindkos reffp sampe ke bind mek1 tw2 spek mayan gagah",
    sellerNumber: "6282132131405"
  }
  
];

function home() {
  app.innerHTML = `
    <div class="container">
      <div class="profile">
        <div class="avatar">
          <img src="profil.jpg" alt="profile">
        </div>

        <div class="title">Jaspost Anap Tzy</div>
        <div class="subtitle">
          Trusted Seller • Fast Response • Safe Transaction
        </div>
      </div>

      <div class="grid">
        ${products.map((p, i) => `
          <div class="card" onclick="detail(${i})">
            <div class="thumb">
              <img src="${p.image}" alt="${p.title}">
              <div class="thumb-title">${p.title}</div>
            </div>

            <div class="price">${p.price}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function detail(index) {
  const p = products[index];

  app.innerHTML = `
    <div class="container">
      <div class="hero">
        <div class="back" onclick="home()">← Kembali</div>

        <div style="
          height:320px;
          border-radius:24px;
          overflow:hidden;
          margin:20px 0;
        ">
          <img
            src="${p.image}"
            alt="${p.title}"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              display:block;
            "
          >
        </div>

        <div class="product-title">${p.title}</div>
        <div class="product-price">${p.price}</div>
        <div class="desc">${p.desc}</div>

        <button
          class="btn primary"
          onclick="showPopup('${p.sellerNumber}')"
        >
          Hubungi Penjual
        </button>
      </div>
    </div>
  `;
}

function showPopup(sellerNumber) {
  let time = 5;

  const popupHTML = `
    <div id="popup" style="
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
    ">
      <div style="
        width: 100%;
        max-width: 550px;
        background: #171a22;
        border-radius: 28px;
        padding: 35px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,.4);
      ">
        <p style="
          line-height: 1.8;
          color: #d5dbe5;
          font-size: 15px;
        ">
          Ini cuma jaspost / jastip.<br>
          Jangan langsung transfer ke seller.<br>
          Utamakan gunakan rekber admin utama.
        </p>

        <br>

        <button
          class="btn primary"
          onclick="copyAdminNumber()"
        >
          Salin Nomor Admin Rekber
        </button>

        <div
          id="count"
          style="
            width: 160px;
            height: 160px;
            margin: 30px auto;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg,#ec4899,#7c3aed);
            font-size: 2rem;
            font-weight: 700;
          "
        >
          ${time}
        </div>

        <button
          id="waBtn"
          onclick="window.open('https://wa.me/${sellerNumber}')"
          style="
            display: none;
            border: none;
            padding: 16px 28px;
            border-radius: 18px;
            background: #22c55e;
            color: white;
            font-weight: 600;
            cursor: pointer;
          "
        >
          Chat Seller via WhatsApp
        </button>

        <br><br>

        <button
          onclick="closePopup()"
          style="
            background: transparent;
            border: none;
            color: #aaa;
            cursor: pointer;
          "
        >
          Tutup
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", popupHTML);

  const count = document.getElementById("count");
  const waBtn = document.getElementById("waBtn");

  const timer = setInterval(() => {
    time--;
    count.innerText = time;

    if (time <= 0) {
      clearInterval(timer);
      count.style.display = "none";
      waBtn.style.display = "inline-block";
    }
  }, 1000);
}

function copyAdminNumber() {
  const adminNumber = "6281234567890";

  navigator.clipboard.writeText(adminNumber)
    .then(() => {
      alert("Nomor admin rekber berhasil disalin!");
    })
    .catch(() => {
      alert("Gagal menyalin nomor.");
    });
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.remove();
}

home();