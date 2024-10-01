// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


document.addEventListener("DOMContentLoaded", () => {
    var element = document.getElementById("mainTree");

    // Function to handle scroll and change z-index
    function checkScroll() {
        if (window.scrollY > 10) {
            element.style.zIndex = 9;
        } else {
            element.style.zIndex = 10;
        }
    }

    // Check scroll position on page load
    checkScroll();

    // Add scroll event listener
    window.addEventListener("scroll", checkScroll);

    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    hamburger.addEventListener("click", () => {
        sidebar.style.display = "block";
        sidebar.classList.add("open");
        element.style.display = "none";  // Hide mainTree when sidebar is open
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
        setTimeout(() => {
            sidebar.style.display = "none";
            element.style.display = "block";  // Show mainTree when sidebar is closed
            checkScroll(); // Recheck scroll position after sidebar closes
        }, 500);
    });
});

