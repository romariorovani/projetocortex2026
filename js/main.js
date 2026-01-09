document.addEventListener("DOMContentLoaded", () => {
  const alertButtons = document.querySelectorAll("[data-alert]");

  alertButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const message = button.getAttribute("data-alert");
      if (message) {
        window.alert(message);
      }
    });
  });

  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
