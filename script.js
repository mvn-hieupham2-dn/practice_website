let mybutton = document.getElementById("scrollBtn");
window.onscroll = () => {
  scroll();
};
let scroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "-60px";
    mybutton.style.display = "block";
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log((document.getElementById("header").style.top = "60px"));
  } else {
    document.getElementById("header").style.top = "0";
    mybutton.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
let topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
