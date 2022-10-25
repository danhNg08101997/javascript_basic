/*----------Hàm tăng giảm fontSize----------*/
function zoomFontSize(id, size) {
  var tag = domID(id);
  var fontSize = Number(tag.style.fontSize.replace("px", ""));
  fontSize += size;
  tag.style.fontSize = fontSize + "px";
}
//Viết hàm trả về 1 thẻ sau khi DOM
function domID(id) {
  return document.getElementById(id);
}
/*----------Hàm tăng giảm fontSize----------*/

/*----------Kiểm tra số nguyên tố----------*/
function kiemTraSNT(number) {
  var checkSNT = true;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}
/*----------Kiểm tra số nguyên tố----------*/

/*----------In sao----------*/
function inSao(soSao) {
  var hangSao = "";
  for (var i = 1; i <= soSao; i++) {
    hangSao += '<i class="fa fa-star"></i>';
  }
  return hangSao;
}
/*----------In sao----------*/
