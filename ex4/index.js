function tinhTienCap() {
  var maKH = document.getElementById("maKhachHang").value;
  var soKenh = Number(document.getElementById("soKenh").value);
  var soKetNoi = Number(document.getElementById("connections").value);
  var loaiKhacHang = document.getElementById("customerType").value;

  // console.log({ soKetNoi, loaiKhacHang });
  // xu ly

  var tienThanhToan = 0;

  if (loaiKhacHang == "household") {
    soKetNoi = 0;
    tienThanhToan = 4.5 + 20.5 + soKenh * 7.5;
  } else {
    soKetNoi = 7.5;
    if (soKetNoi <= 10) {
      tienThanhToan = 15 + 7.5 * soKetNoi + 50 * soKenh;
    } else {
      tienThanhToan = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
    }
  }
  // Xuat ra man hinh

  document.getElementById(
    "result"
  ).innerHTML = `<p class="fs-5 fw-bold mt-3 bg-info p-3"> MSKH: ${maKH}  <br /> Tien cap: ${tienThanhToan}vnd  </p>`;
}

document.getElementById("btn-tinhTien").addEventListener("click", tinhTienCap);
