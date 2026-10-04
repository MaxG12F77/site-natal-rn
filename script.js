const dropdown = document.querySelector(".nav-dropdown");
const dropdownButton = document.querySelector(".nav-dropdown-toggle");
const dropdownLinks = document.querySelectorAll(".submenu-destinos a");

function fecharSubmenu() {
  if (!dropdown || !dropdownButton) {
    return;
  }

  dropdown.classList.remove("is-open");
  dropdownButton.setAttribute("aria-expanded", "false");
}

function alternarSubmenu() {
  if (!dropdown || !dropdownButton) {
    return;
  }

  const estaAberto = dropdown.classList.toggle("is-open");
  dropdownButton.setAttribute("aria-expanded", String(estaAberto));
}

if (dropdown && dropdownButton) {
  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();
    alternarSubmenu();
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      fecharSubmenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fecharSubmenu();
      dropdownButton.focus();
    }
  });

  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", fecharSubmenu);
  });
}
