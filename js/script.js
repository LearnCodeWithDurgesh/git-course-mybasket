document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Item added to cart 🛒");
    });
  });
});
