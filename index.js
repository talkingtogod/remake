// Smooth Scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// Simple Animation
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 1s forwards";
      }
    });
  });
  observer.observe(section);
});
