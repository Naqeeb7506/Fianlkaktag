window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});


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


// Function to add scroll event listener for desktop viewports
function handleScrollEffect() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;

  if (scrollPosition > viewportHeight * 0.01) { // 50% of the viewport height
      navbar.style.zIndex = '100'; // Change z-index when scroll > 50vh
  } else {
      navbar.style.zIndex = '1'; // Reset z-index when scroll <= 50vh
  }
}

// Check if the viewport is desktop-sized
function checkViewport() {
  if (window.innerWidth > 1024) { // Desktop width threshold (can adjust as needed)
      window.addEventListener('scroll', handleScrollEffect);
  } else {
      window.removeEventListener('scroll', handleScrollEffect); // Remove for smaller screens
  }
}

// Run the check on page load and window resize
window.addEventListener('DOMContentLoaded', checkViewport); // On page load
window.addEventListener('resize', checkViewport); // On window resize



document.addEventListener("DOMContentLoaded", () => {
    // var element = document.getElementById("mainTree");

    // // Function to handle scroll and change z-index
    // function checkScroll() {
    //     if (window.scrollY > 10) {
    //         element.style.zIndex = 9;
    //     } else {
    //         element.style.zIndex = 10;
    //     }
    // }

    // // Check scroll position on page load
    // checkScroll();

    // // Add scroll event listener
    // window.addEventListener("scroll", checkScroll);

    const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
    sidebar.style.visibility = "visible"; // Make it visible before applying transitions
    sidebar.classList.add("open");
    // element.style.display = "none";  // Hide mainTree when sidebar is open
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    setTimeout(() => {
        sidebar.style.visibility = "hidden"; // Use visibility instead of display
        // element.style.display = "block";  // Show mainTree when sidebar is closed
        // checkScroll(); // Recheck scroll position after sidebar closes
    }, 500); // Match the CSS transition duration
});
});


function closesidelinks() {
  document.getElementById("sidebar").style.visibility = "hidden";
}

