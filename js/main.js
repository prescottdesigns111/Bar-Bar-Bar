// Menu tab switching
document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // review "read more" toggling for long reviews
  document.querySelectorAll(".review-card").forEach((card) => {
    const text = card.querySelector(".review-text");
    const btn = card.querySelector(".read-more-btn");
    if (!text || !btn) return;

    if (text.textContent.trim().length > 150) {
      btn.classList.add("visible");
      btn.addEventListener("click", () => {
        const expanded = text.classList.toggle("expanded");
        btn.textContent = expanded ? "Read less" : "Read more";
      });
    } else {
      btn.remove();
    }
  });

  // subtle parallax tilt on drink images
  document.querySelectorAll(".drink-image-wrap img").forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
    });
  });
});
