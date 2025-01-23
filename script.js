let navBar = document.getElementById("navBar");
let toggleBar1 = document.querySelector(".toggleBar");
let gotoTop = document.querySelector(".gotoTop");

function toggleBar() {
  navBar.classList.toggle("navbarSmallDevice");
  toggleBar1.classList.toggle("toggleBarClick");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsContent = document.querySelectorAll(".hiddenContent");
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsContent.forEach((el) => observer.observe(el));

window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};
