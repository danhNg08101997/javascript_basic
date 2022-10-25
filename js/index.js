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
// ---------------------------------Mô hình 3 khối-------------------------------------------

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
//-----------------------------------DOM-------------------------------------------------

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

// ***VD9
document.getElementById("btnDiemTBMon").onclick = function () {
  //input: number
  var diemToan = Number(document.getElementById("diemToan").value);
  var diemHoa = Number(document.getElementById("diemHoa").value);
  var diemLy = Number(document.getElementById("diemLy").value);

  //progress
  var diemTB = 0;
  diemTB = (diemToan + diemHoa + diemLy) / 3;
  if (diemTB >= 0 && diemTB < 5) {
    document.getElementById("ketQuaViDu9").innerHTML =
      "Điểm trung bình: " + diemTB + " - Xếp loại:Không đạt!";
  } else if (diemTB >= 5 && diemTB < 8) {
    document.getElementById("ketQuaViDu9").innerHTML =
      "Điểm trung bình: " + diemTB + " - Xếp loại: đạt";
  } else {
    document.getElementById("ketQuaViDu9").innerHTML =
      "Điểm trung bình: " + diemTB + " - Xếp loại: giỏi";
  }
  //output: string;
};
// -----------Biểu thức 3 ngôi
/*
if(dk === true){
    xu_ly = gia_tri; (1)
}else{
    xu_ly = gia_tri; (2)
}

dk === true ? xu_ly1 : xu_ly2
*/
var number = 5;
var output = "";
output = number % 2 === 0 ? "số chẵn" : "số lẻ";
console.log(output);

// -------------Cấu trúc switch case
//so sánh trường hợp bằng bằng sẽ nhanh hơn câu lệnh if else

document.getElementById("btnVD10").onclick = function () {
  //input: number
  var iSoVD10 = Number(document.getElementById("iSoVD10").value);
  //Output: string;
  var spanVD10 = "";
  //progress
  switch (iSoVD10) {
    case 1:
      {
        spanVD10 = "số một";
      }
      break;
    case 2:
      {
        spanVD10 = "số hai";
      }
      break;
    case 3:
      {
        spanVD10 = "số ba";
      }
      break;
    case 4:
      {
        spanVD10 = "số bốn";
      }
      break;
    case 5:
      {
        spanVD10 = "số năm";
      }
      break;
    case 6:
      {
        spanVD10 = "số sáu";
      }
      break;
    case 7:
      {
        spanVD10 = "số bayr";
      }
      break;
    case 8:
      {
        spanVD10 = "số tám";
      }
      break;
    case 9:
      {
        spanVD10 = "số chín";
      }
      break;
    case 10:
      {
        spanVD10 = "số mười";
      }
      break;
    default: {
      spanVD10 = "Nhập số từ 1 - 10";
    }
  }
  document.getElementById("spanVD10").innerHTML = spanVD10;
};
/*-----------------------Cấu trúc rẻ nhánh trong lập trình----------------------------- */

/*------------------------------FUNCTION-------------------------------- */
function inNoiDung(id, noiDung) {
  //input: tham số(parameter)
  document.getElementById(id).innerHTML = noiDung;
  document.getElementById(id).style.fontSize = "30px";
  //output
}
inNoiDung("thongTin", "good morning");
inNoiDung("thongTin1", "hello");
inNoiDung("thongTin2", "good night");

//hàm có giá trị trả về function return
function tinhLuong(soGioLam, tienLuongTrenGio) {
  var tienLuong = soGioLam * tienLuongTrenGio;
  return tienLuong;
}
var tienLuong = tinhLuong(5, 100);

//Viết chương trình tính điểm 2 khối thi đại học A, C
document.getElementById("btnTinhDiem").onclick = function () {
  //Tính điểm khối A
  //input: diemToan, diemLy, diemHoa
  var diemToan = Number(document.getElementById("diemToan1").value);
  var diemLy = Number(document.getElementById("diemLy1").value);
  var diemHoa = Number(document.getElementById("diemHoa1").value);
  // output: number
  var diemTBKA = tinhDiemTB(diemToan, diemLy, diemHoa);
  //hiển thị ra giao diện
  document.getElementById("diemTBKA1").value = diemTBKA;

  // Tính điểm trung bình khối C
  var diemVan = Number(document.getElementById("diemVan1").value);
  var diemSu = Number(document.getElementById("diemSu1").value);
  var diemDia = Number(document.getElementById("diemDia1").value);
  var diemTBKC = tinhDiemTB(diemVan, diemSu, diemDia);
  document.getElementById("diemTBKC1").value = diemTBKC;
};
function tinhDiemTB(diem1, diem2, diem3) {
  var dtb = 0;
  dtb = (diem1 + diem2 + diem3) / 3;
  return dtb;
}

//Bài tập 1: xây dựng chức năng zooin zoomout cho 2 button bên dưới
document.getElementById("btnZoomInHome").onclick = function () {
  zoomFontSize("home", 5);
};
document.getElementById("btnZoomOutHome").onclick = function () {
  zoomFontSize("home", -5);
};
//Bài tập 2: Xây dựng chức năng zoomin zoomout cho đoạn text bên dưới
document.getElementById("btnZoomInTxt").onclick = function () {
  zoomFontSize("txtContent", 1);
};
document.getElementById("btnZoomOutTxt").onclick = function () {
  zoomFontSize("txtContent", -1);
};
/*------------------------------FUNCTION-------------------------------- */

/*-------------------------------VÒNG LẶP------------------------------------

  các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
  B1: xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
  B2: thiết lập điều kiện lặp
  B3: Cài đặt khối xử lý
  B4: thay đổi giá trị của biến bước nhảy

*/

//Viết hàm xuất thông tin lên giao diện
document.getElementById("btnVD11").onclick = function () {
  //input: number
  var input = Number(document.getElementById("iSoVD11").value);
  //output: string
  var output = "";
  //progress
  var dem = 1;

  while (dem <= input) {
    var div = '<div class="alert alert-success mt-2">Hello cybersoft</div>';
    output += div;
    dem++;
  }
  document.getElementById("ketQua11").innerHTML = output;
};
//Cho phép người dùng nhập vào 1 số tính giai thừa số đó
document.getElementById("btnVD12").onclick = function () {
  //input: iSoVD12:number
  var iSoVD12 = document.getElementById("iSoVD12").value;
  //output: ketQuaVD12: number
  var ketQuaVD12 = 1;
  //progress
  var index = 1;
  while (index <= iSoVD12) {
    ketQuaVD12 *= index;
    index++;
  }
  document.getElementById("ketQuaVD12").innerHTML = ketQuaVD12;
};
//Cho phép người dùng nhập vào 1 số tính tổng từ 1 -> n (số người dùng nhập)
document.getElementById("btnVD13").onclick = function () {
  //input: iSoVD13: number
  var iSoVD13 = Number(document.getElementById("iSoVD13").value);
  //output: ketQuaVD13: number
  var ketQuaVD13 = 0;
  //progress
  var index = 0;
  while (index <= iSoVD13) {
    ketQuaVD13 += index;
    index++;
  }
  document.getElementById("ketQuaVD13").innerHTML = ketQuaVD13;
};
//Cho phép người dùng nhập vào 1 số tính tổng từ 1 -> n. Tính tổng các số chẵn
document.getElementById("btnVD14").onclick = function () {
  //input: iSoVD14: number
  var iSoVD14 = Number(document.getElementById("iSoVD14").value);
  //output: ketQuaVD14: number;
  var ketQuaVD14 = 0;
  //progress
  // var index1 = 0;
  var index2 = 2;
  while (index2 <= iSoVD14) {
    //cách 1:
    // if (index1 % 2 === 0) {
    //   ketQuaVD14 += index1;
    // }
    // index++;

    //cách 2:
    ketQuaVD14 += index2;
    index2 += 2;
  }
  document.getElementById("ketQuaVD14").innerHTML = ketQuaVD14;
};

//Cho phép người dùng nhập vào 1 số, cho biết số đó có phải là số nguyên tố hay không
document.getElementById("btnVD15").onclick = function () {
  //input: iSoVD15: number
  var iSoVD15 = Number(document.getElementById("iSoVD15").value);
  //output: ketQuaVD15: string
  var ketQuaVD15 = "";

  //cách 1
  //progress
  // var i = 1;
  // var index = 0;
  // while (i <= iSoVD15) {
  //   if (iSoVD15 % i === 0) {
  //     index++;
  //   }
  //   i++;
  // }
  // if (index === 2) {
  //   ketQuaVD15 = iSoVD15 + " là số nguyên tố";
  // } else {
  //   ketQuaVD15 = iSoVD15 + " không phải là số nguyên tố";
  // }
  //cách 2
  //đặt 1 biến mặc định (biến cờ hiệu)
  var checkSNT = true;
  //xác định yếu tố thay dodoir
  var index = 2;
  //xác định yếu tố lập
  while (index <= Math.sqrt(iSoVD15)) {
    //nếu chia hết cho số nào khác (ước > 2)
    if (iSoVD15 % index === 0) {
      checkSNT = false;
      break;
    }
    index++;
  }
  if (checkSNT) {
    ketQuaVD15 = iSoVD15 + " là số nguyên tố";
  } else {
    ketQuaVD15 = iSoVD15 + " không phải là số nguyên tố";
  }
  document.getElementById("ketQuaVD15").innerHTML = ketQuaVD15;
};

//Viết chương trình nhập vào 1 số và in ra số * tương ứng
document.getElementById("btnVD16").onclick = function () {
  //input: number
  var iSoVD16 = Number(document.getElementById("iSoVD16").value);
  //output: string
  var ketQuaVD16 = "";
  //progress
  for (var index = 1; index <= iSoVD16; index++) {
    ketQuaVD16 = ketQuaVD16 + '<i class="fa fa-star"></i>';
  }
  document.getElementById("ketQuaVD16").innerHTML = ketQuaVD16;
};

//Viết chương trình cho phép người dùng nhập vào số hàng và số cột. In ra các ngôi sao theo số liệu trên
document.getElementById("btnVD17").onclick = function () {
  //input: number
  var soHang = Number(document.getElementById("soHang").value);
  var soCot = Number(document.getElementById("soCot").value);
  //output: string
  var ketQuaVd17 = "";
  //progress
  for (var index = 1; index <= soHang; index++) {
    var htmlHangSao = inSao(soCot);
    ketQuaVd17 += htmlHangSao + "<br />";
  }
  document.getElementById("ketQuaVD17").innerHTML = ketQuaVd17;
};

//Cho phép người dùng nhập vào 1 số. In ra các số nguyên tó nhỏ hơn hoặc bằng số người dùng nhập
document.getElementById("btnVD18").onclick = function () {
  //input: number
  var iSoVD18 = Number(document.getElementById("iSoVD18").value);
  //output: string
  var ketQuaVD18 = "";
  for (var index = 2; index <= iSoVD18; index++) {
    //phải kiểm tra index có phải là số nguyên tố hay không
    var checkSNT = kiemTraSNT(index);
    if (checkSNT) {
      ketQuaVD18 += index + " ";
    }
  }
  document.getElementById("ketQuaVD18").innerHTML = ketQuaVD18;
};

//------------------------------VÒNG LẶP-------------------------------------


//------------------------------ARRAY-------------------------------------
















//------------------------------ARRAY-------------------------------------
