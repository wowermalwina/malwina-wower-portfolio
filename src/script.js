const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("myLinks");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

// function changeColors(){

//     document.getElementById("profile-pic").src = "src/img/vampire.jpg";
//         document.body.style.background = "rgb(39,42,55)";
//         document.getElementById("header").style.background = "rgb(206,114,173)";
//         document.getElementById("contact-section").style.background = "rgb(148,124,206)";
//         getComputedStyle(document.documentElement).getPropertyValue('#515151');
//         document.documentElement.style.setProperty('#515151', 'red');
//         document.getElementById("portfolio").style.color = "lightblue";
//         document.getElementsByClassName("headline").style.color = "lightblue";

//     }

function toggleImg() {
  let initialImg = document.getElementById("profile-pic").src;
  let srcTest = initialImg.includes("src/img/picture-of-malwina.jpg");
  let newImg = {
    true: "src/img/vampire.jpg",
    false: "src/img/picture-of-malwina.jpg",
  }[srcTest];

  return newImg;
}

function toggleImageFooter() {
  let initialImg = document.getElementById("footer-image").src;
  let srcTest = initialImg.includes("src/img/working_late.svg");
  let newImg = {
    true: "src/img/undraw_working_late.svg",
    false: "src/img/working_late.svg",
  }[srcTest];

  return newImg;
}

const colorChanger = document.getElementById("colorChanger");

colorChanger.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("profile-pic").src = toggleImg();
  document.getElementById("footer-image").src = toggleImageFooter();
});
