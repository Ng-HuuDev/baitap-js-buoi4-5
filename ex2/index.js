function tinhTien() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = Number(document.getElementById("soKw").value);
  //   console.log({ hoTen, soKw });

  // xu ly
  var soKwDaDung = 0;

  var soKwDau = 0;
  var soKw50Ke = 0;
  var soKw100Ke = 0;
  var soKw150Ke = 0;
  var soKwConLai = 0;

  // tinh so kw da dung

  if (soKw == soKwDau) {
    soKwDau = 500;
  } else if (soKw == soKw50Ke) {
    soKw50Ke = 650;
  } else if (soKw == soKw100Ke) {
    soKw100Ke = 850;
  } else if (soKw == soKw150Ke) {
    soKw150Ke = 1100;
  } else {
    soKwConLai = 1300;
  }

  //   // tinh tien

  if (soKw <= 50) {
    soKwDaDung = soKw * 500;
  } else if (soKw <= 100) {
    soKwDaDung = soKw * 650;
  } else if (soKw <= 200) {
    soKwDaDung = soKw * 850;
  } else if (soKw <= 350) {
    soKwDaDung = soKw * 1100;
  } else {
    soKwDaDung = soKw * 1300;
  }
  //
  //   console.log(soKwDaDung);
  document.getElementById(
    "result"
  ).innerHTML = `<p class="fs-5 fw-bold mt-3 bg-info p-3"> Ho Ten: ${hoTen} <br /> So dien da dung ${soKwDaDung}vnd </p>`;
}

document.getElementById("btn-tinhTien").addEventListener("click", tinhTien);
