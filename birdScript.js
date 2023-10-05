var imageThumbs = document.getElementById("pic-thumbs");
var currentImage = document.getElementById("current-pic");

for (var i = 1; i <=10; i++) {
  var thumb = document.createElement("img");
  thumb.src = "pic" + i + ".jpg";
  thumb.alt = "Pic " + i;
  

   
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
  }