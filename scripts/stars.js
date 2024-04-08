function toggleMode(img) {
  if (img.getAttribute("src") === "./assets/Star.svg") {
    img.setAttribute("src", "./assets/StarRate.svg")
  } else {
    img.setAttribute("src", "./assets/Star.svg")
  }
}
