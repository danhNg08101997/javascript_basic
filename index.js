// ---------------------------------Mô hình 3 khối-------------------------------------------

/*
Viết chương trình cho phép người dùng nhập vào chiều dài và chiều rộng của màn hình. Tính chu vi và diện tích màn hình?

Input: chieu dai - chieu rong

progress:
    B1: khai báo biến chứa chiều dài và chiều rộng
    B2: Khai báo biến chứa diện tích và chu vi
    B3: Gán chu vi = (chieuDai + chieuRong) * 2
    B4: Gán diện tích = chieuDai * chieuRong
    B5: in chu vi và diện tích ra màn hình

output: chu vi - dien tich
*/
// input: chieuDai, chieuRong
var chieuDai = 5;
var chieuRong = 4;
//output: dienTich, chuVi
var chuVi = 0;
var dienTich = 0;
//progress:
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi = ", chuVi);
console.log("Diện tích = ", dienTich);

/**
 * Viết chương trình cho phép người dùng nhập vào 1 số => tính tổng kí số của số đó
 * Ví dụ: 456 = 4 + 5 + 6
 */

//input
var so = 456;
//output
var tongKySo = 0;
// progress:
var hangTram = Math.floor(so / 100);
var hangChuc = Math.floor((so % 100) / 10);
var hangDonVi = (so % 100) % 10;

tongKySo = hangTram + hangChuc + hangDonVi;
console.log("Tổng ký số = ", tongKySo);

//-----------------------------------DOM-------------------------------------------------

var tagH1 = document.getElementById("title");
//.innerHTML: phần nội dung ở giữa 2 thẻ HTML đóng mở
tagH1.innerHTML = "Cybersoft.edu.vn";
//.value: phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById("txt");
tagInput.value = "Hello Danh";

//truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("number");
console.log(tagInputNumber.value);
// alert(tagInputNumber.value);

//.src: là nội dung hình ảnh của thẻ img
var tagImg = document.getElementById("hinhAnh");
tagImg.src = "./image/anh-ca-nhan-2.jpg";

/**
 * Đinh nghĩa hàm: dùng để thục thi 1 loạt hành động sau khi
 */
function sayHello() {
  //scope
  alert("Hello word!");
}
//Lệnh gọi hàm: sayHello()

/*
Viết chương trình yêu cầu người dùng nhập vào 1 giá trị và khi người dùng bấm hiển thị thì giá trị đó sẽ in ra tại thẻ span#ketQuaHienThi
*/
//handleEvent: xử lý sự kiện
function hienThiThongTin() {
  //lấy giá trị nhập khi gọi hàm hiển thị thông tin
  //input
  var input = document.getElementById("giaTriNhap");
  console.log(input.value);
  //output: string
  var output = "";
  //progress
  output = input.value;
  //xử lý kết quả hiển thị lên giao diện
  var tagSpanKetQua = document.getElementById("ketQuaHienThi");
  tagSpanKetQua.innerHTML = output;
}

/*
Nhập vào số tiền lương (1h) và số giờ làm in ra tổng lương bằng số giờ nhân tiền lương
*/

function tinhTongLuong() {
  //input: tienLuong1h: number, soGioLam:number
  var tienLuong = document.getElementById("tienLuong1h").value;
  var soGioLam = document.getElementById("soGioLam").value;
  //kiểm tra input
  // console.log("tien Luong:", tienLuong);
  // console.log("so gio lam:", soGioLam);

  //output
  var tongLuong = 0;

  //progress
  tongLuong = tienLuong * soGioLam;

  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
}

/*
Xây dựng form đăng nhập
*/
var btnDangNhap = document.getElementById("btnDangNhap");
btnDangNhap.onclick = function () {
  //anonymous function
  //input: taiKhoan: string, matKhau: string
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;
  //kiểm tra input
  console.log("account: ", taiKhoan);
  console.log("password: ", matKhau);
  //output: thongBao: string
  var thongBao = "";
  //progress
  thongBao = "Tài khoản: " + taiKhoan + " - Mật khẩu: " + matKhau;
  var tagKetQua = document.getElementById("ketQuaDangNhap");
  tagKetQua.innerHTML = thongBao;

  //thay đổi màu sắc (style)
  //   tagKetQua.style.backgroundColor = "green";
  //   tagKetQua.style.padding = "15px";
  //   tagKetQua.style.color = "#fff";
  tagKetQua.className = "bg-success p-2 m-2 text-white";
};

/*
Tính tiền tip
*/
document.getElementById("btnTinhTienTip").onclick = function () {
  /*
input: 
    + tongTienThanhToan: number
    + phanTramTip: number
    + soNguoiTip: number
progress:
    + lấy thông tin người dùng nhập từ giao diện
    + sử dụng công thức tính tiền phần trăm tip quy ra tiền và chia cho số người
output:
    + tienTipTrenNguoi: number
*/
  var tongTienThanhToan = document.getElementById("tongTienThanhToan").value;
  var phanTramTip = document.getElementById("phanTramTip").value;
  var soNguoiTip = document.getElementById("soNguoiTip").value;
  var tienTipTrenNguoi = 0;
  tienTipTrenNguoi = (tongTienThanhToan * phanTramTip) / 100 / soNguoiTip;
  document.getElementById("tienTipTrenNguoi").innerHTML =
    tienTipTrenNguoi + " $";
};

/*-----------------------Cấu trúc rẻ nhánh trong lập trình----------------------------- */
// ---Cấu trúc if

document.getElementById("btnTinhTriTuyetDoi").onclick = function () {
  //input số: number
  var iSo = document.getElementById("iSo_1").value;

  //output: số: number
  var ketQua = 0;
  //progress
  ketQua = iSo;
  if (ketQua < 0) {
    ketQua = -iSo;
  }
  document.getElementById("ketQuaViDu1").innerHTML = ketQua;
};

// ----Cấu trúc if else
//***Vd5:
document.getElementById("btnKiemTraSo").onclick = function () {
  //input: number
  var iSo = document.getElementById("iSo_2").value;
  //output: string
  var ketQua = "";
  //progress:
  if (iSo % 2 === 0) {
    ketQua = "Số chẵn";
  } else {
    ketQua = "Số lẻ";
  }
  //Hiển thị ra giao diện
  document.getElementById("ketQuaViDu2").innerHTML = ketQua;
};
// ***Vd6
document.getElementById("btnXepLoai").onclick = function () {
  //input: number
  var diemTB = document.getElementById("diemTB").value;
  //output: string
  var xepLoai = "";
  //progress
  if (Number(diemTB) >= 5) {
    xepLoai = "Đậu";
  } else {
    xepLoai = "Rớt";
  }
  //Hiển thị ra giao diện
  document.getElementById("ketQuaXepLoai").innerHTML = "Kết quả: " + xepLoai;
};
// ***Vd7
document.getElementById("btnTimSoLonNhat").onclick = function () {
  //sử dụng kĩ thuật đặt cờ
  //input number
  var soThu1 = Number(document.getElementById("soThu1").value);
  var soThu2 = Number(document.getElementById("soThu2").value);

  //progress
  var max = soThu1;
  if (max < soThu2) {
    max = soThu2;
  }
  //output: number
  var soLonNhat = max;
  //Hiển thị ra giao diện
  document.getElementById("soLonNhat").innerHTML = "Số lớn nhất: " + soLonNhat;
};

// ***Vd8
document.getElementById("btnTinhTienLuong").onclick = function () {
  //input: number
  var soGioLamTrenTuan = Number(
    document.getElementById("soGioLamTrenTuan").value
  );
  var tienCong1h = Number(document.getElementById("tienCong1h").value);
  //output: number
  var tienLuong = 0;
  //progress
  if (soGioLamTrenTuan <= 40) {
    tienLuong = soGioLamTrenTuan * tienCong1h;
  } else {
    tienLuong = 40 * tienCong1h + (soGioLamTrenTuan - 40) * tienCong1h * 1.5;
  }
  //Hiển thị ra giao diện
  document.getElementById("ketQuaVD5").innerHTML = "Tiền lương: " + tienLuong;
};
