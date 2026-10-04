document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = year);

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });

  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      status.className = "alert alert-success mt-3";
      status.textContent = "Thanks! Your message was validated successfully. This demo form does not send data to a server.";
      form.reset();
      form.classList.remove("was-validated");
    });
  }
});