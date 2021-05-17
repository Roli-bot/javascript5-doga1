function myFunction(imgs) {
  var expandImg = document.getElementById("nagyit");
  var imgText = document.getElementById("imgszöveg");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}