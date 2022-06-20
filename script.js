window.onscroll = () => {
  scroll();
};
let scroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "-60px";
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);
    // console.log((document.getElementById("header").style.top = "60px"));
  } else {
    document.getElementById("header").style.top = "0";
  }
};
