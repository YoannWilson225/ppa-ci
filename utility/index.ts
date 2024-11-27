export const nextUtility = {
  stickyNav(): void {
    const header = document.getElementById("header-sticky");

    if (!header) {
      console.warn('Element with ID "header-sticky" not found.');
      return;
    }

    // Add an event listener to the window's scroll event
    window.addEventListener("scroll", function () {
      // Check the scroll position
      if (window.scrollY > 250) {
        // If the scroll position is greater than 250, add the "sticky" class
        header.classList.add("sticky");
      } else {
        // Otherwise, remove the "sticky" class
        header.classList.remove("sticky");
      }
    });
  },

  scrollAnimation(): void {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs").WOW;
      new WOW().init();
    }
  },
};
