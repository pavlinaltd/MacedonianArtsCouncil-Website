/*
This is used to create the photo gallery in exhibit and doors .html files. 
*/

Array.from(document.querySelectorAll(".thumbnails img")).forEach(
  (hoverImage) => {
    hoverImage.addEventListener("mouseover", (e) => {
      let hoverTarget = e.currentTarget.src;
      e.currentTarget.closest(
        ".thumbnails"
      ).previousSibling.previousSibling.src = hoverTarget;
    });
  }
);
