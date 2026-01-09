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
});
