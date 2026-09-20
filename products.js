// ======================
// MOBILE MENU
// ======================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ======================
// BAG COUNTER
// ======================

let bagCount = 0;
const bagCountEl = document.getElementById("bagCount");

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    bagCount++;
    if (bagCountEl) {
      bagCountEl.textContent = bagCount;
    }

    const originalText = btn.textContent;

    btn.textContent = "Added ✓";
    btn.classList.add("added");

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove("added");
    }, 1200);

  });
});

// ======================
// PRODUCT SCROLL BUTTONS
// ======================

const productGrid = document.getElementById("productGrid");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

if (productGrid && leftBtn && rightBtn) {

  rightBtn.addEventListener("click", () => {
    productGrid.scrollBy({
      left: 400,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    productGrid.scrollBy({
      left: -400,
      behavior: "smooth"
    });
  });

}