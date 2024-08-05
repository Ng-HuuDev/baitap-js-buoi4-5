function tinhThue() {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);

  //   console.log({ hoTen, tongThuNhap, soNguoi });
  // xu ly

  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoi * 1600000;
  var tienThue = 0;
  var thueSuat;

  // tinh tien thue = thuNhapChiuThue * thue suat
  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 0.05;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 120000000) {
    thueSuat = 0.1;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 210000000) {
    thueSuat = 0.15;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 384000000) {
    thueSuat = 0.2;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 624000000) {
    thueSuat = 0.25;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 960000000) {
    thueSuat = 0.3;
    tienThue = thuNhapChiuThue * thueSuat;
  } else {
    thueSuat = 0.35;
    tienThue = thuNhapChiuThue * thueSuat;
  }
  // xuat ket qua
  document.getElementById(
    "result"
  ).innerHTML = `<p class="fs-5 fw-bold mt-3 bg-info p-3"> Ho va Ten: ${hoTen}  <br /> Tien thue la: ${tienThue}vnd  </p>`;
}

document.getElementById("btn-tinhThue").addEventListener("click", tinhThue);
