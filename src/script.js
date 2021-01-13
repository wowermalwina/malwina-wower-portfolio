const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("myLinks");

let open = false;
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  if (open === true) {
    open = false;
    hamburger.innerHTML = `<span class="fas fa-bars"></span>`;
  } else {
    open = true;
    hamburger.innerHTML = `<span class="fas fa-times"></span>`;
  }
});

const navLinks = document.querySelectorAll(".myLinks li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navUL.classList.toggle("show");
    if (open === true) {
      open = false;
      hamburger.innerHTML = `<span class="fas fa-bars"></span>`;
    } else {
      open = true;
      hamburger.innerHTML = `<span class="fas fa-times"></span>`;
    }
  });
});

// ToggleImg

const toggleImg = () => {
  let initialImg = document.getElementById("profile-pic").src;
  let srcTest = initialImg.includes("src/img/picture-of-malwina.jpg");
  let newImg = {
    true: "src/img/vampire.jpg",
    false: "src/img/picture-of-malwina.jpg",
  }[srcTest];

  return newImg;
};

const toggleImageFooter = () => {
  let initialImg = document.getElementById("footer-image").src;
  let srcTest = initialImg.includes("src/img/working_late.svg");
  let newImg = {
    true: "src/img/undraw_working_late.svg",
    false: "src/img/working_late.svg",
  }[srcTest];

  return newImg;
};

const colorChanger = document.getElementById("colorChanger");

colorChanger.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("profile-pic").src = toggleImg();
  document.getElementById("footer-image").src = toggleImageFooter();
});
