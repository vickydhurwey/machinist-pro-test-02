
document.addEventListener("DOMContentLoaded", () => {

  // SEARCH MODULES
  const searchInput = document.querySelector(".search-box");
  const moduleCards = document.querySelectorAll(".module-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase().trim();

      moduleCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();

        card.style.display = cardText.includes(searchValue)
          ? ""
          : "none";
      });
    });
  }

  // COMING SOON TOAST
  function showToast(message) {
    const oldToast = document.querySelector(".toast");

    if (oldToast) {
      oldToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2500);
  }

  // MODULE CLICK
  moduleCards.forEach(card => {
    card.addEventListener("click", event => {
      const link = card.getAttribute("href");

      if (!link || link === "#") {
        event.preventDefault();
        showToast("This module is coming soon!");
      }
    });
  });

  // CURRENT YEAR
  const yearElement = document.querySelector("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ACTIVE BOTTOM NAV
  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

});
