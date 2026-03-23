const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const revealElements = document.querySelectorAll(".reveal");
const showcaseSection = document.querySelector(".showcase");
const bouquetOverlay = document.getElementById("bouquetOverlay");
const showcaseSteps = document.querySelectorAll(".showcase-step");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

function updateShowcaseScroll() {
  if (!showcaseSection || !bouquetOverlay) return;

  const rect = showcaseSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const sectionHeight = showcaseSection.offsetHeight;
  const totalScrollable = sectionHeight - windowHeight;

  if (totalScrollable <= 0) {
    bouquetOverlay.style.opacity = "1";
    bouquetOverlay.style.transform = "scale(1)";
    return;
  }

  let progress = (-rect.top) / totalScrollable;
  progress = Math.max(0, Math.min(1, progress));

  bouquetOverlay.style.opacity = String(progress);
  bouquetOverlay.style.transform = `scale(${0.96 + progress * 0.04})`;

  showcaseSteps.forEach((step) => {
    const trigger = Number(step.dataset.progress || 0);
    if (progress >= trigger) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateShowcaseScroll, { passive: true });
window.addEventListener("resize", updateShowcaseScroll);
window.addEventListener("load", updateShowcaseScroll);