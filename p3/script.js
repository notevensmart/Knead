const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function scrollToCurrentHash() {
  if (!window.location.hash) return;

  const target = document.querySelector(window.location.hash);
  if (!target) return;

  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion.matches ? "auto" : "smooth"
  });
}

window.addEventListener("load", () => {
  window.setTimeout(scrollToCurrentHash, 80);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(scrollToCurrentHash, 0);
  });
});
