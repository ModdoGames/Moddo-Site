document.onscroll = () => {
  // adjust for the difference between window height and width
  let percentScrolled = window.pageYOffset / window.innerHeight;
  let toScroll = percentScrolled * window.innerWidth;
  // scroll horizontally
  document.getElementById("scroll").style.left = "-" + toScroll + "px";
}
