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
