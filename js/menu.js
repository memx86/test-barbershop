(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLinks = document.querySelectorAll("[data-mobile-link]");

  const doMagic = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  };

  menuBtnRef.addEventListener("click", doMagic);
  for (const link of mobileLinks) {
    link.addEventListener("click", doMagic);
  }
})();
