const hamburgerMenuContainerTag = document.querySelector(
  ".hamburgerMenuContainer"
);

const overlayMenuTag = document.querySelector(".overlayMenu");
const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");
const liTags = document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click", () => {
  if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
    overlayMenuTag.classList.remove("showOverlayMenu");
    hamburgerLine2Tag.classList.remove("hideline2");
    hamburgerLine1Tag.classList.remove("rotatePlus45Deg");
    hamburgerLine3Tag.classList.remove("rotateMinus45Deg");
    hamburgerMenuContainerTag.classList.remove("isOpened");
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.remove("moveLiTagUp");
    }
  } else {
    overlayMenuTag.classList.add("showOverlayMenu");
    hamburgerLine2Tag.classList.add("hideline2");
    hamburgerLine1Tag.classList.add("rotatePlus45Deg");
    hamburgerLine3Tag.classList.add("rotateMinus45Deg");
    hamburgerMenuContainerTag.classList.add("isOpened");
    for (let i = 0; i < liTags.length; i++) {
      liTags[i].classList.add("moveLiTagUp");
    }
  }
});
