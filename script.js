// Simple animation effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";
  });

  const reveal = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        sec.style.transition = "all 1s ease";
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal();
});