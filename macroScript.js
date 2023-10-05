var imageThumbs = document.getElementById("mac-thumbs");
var currentImage = document.getElementById("current-mac");

for (var i = 1; i <=6; i++) {
  var thumb = document.createElement("img");
  thumb.src = "mac" + i + ".jpg";
  thumb.alt = "Mac " + i;
  

   
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
    }
  );
  }