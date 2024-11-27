document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const footLinks = document.querySelectorAll(".foot-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-700");
        link.classList.add("text-white");
      });

      link.classList.add("text-blue-700");
      link.classList.remove("text-white");
    });
  });

  footLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      navLinks.forEach((link) => {
        link.classList.remove("text-blue-700");
        link.classList.add("text-white");
      });

      link.classList.add("text-blue-700");
      link.classList.remove("text-white");
    });
  });

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 50;

    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-700");
          link.classList.add("text-white");
        });

        link.classList.add("text-blue-700");
        link.classList.remove("text-white");
      }
    });
  });
});
