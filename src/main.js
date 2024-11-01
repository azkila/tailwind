// ~~~~~~~~~~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~~~~~~~~~~~~~~~
// Select the navbar and all sections
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

// Function to change the navbar background based on the visible section
function changeNavbarBackground() {
  let windowHeight = window.innerHeight; // Get the window height
  
  // Loop through each section to determine which one is currently in view
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); // Get section position relative to viewport

    // Check if section is in the viewport (at least partially visible)
    if (rect.top <= navbar.offsetHeight && rect.bottom >= navbar.offsetHeight) {
      // Get the background color of the current section
      const sectionBgColor = window.getComputedStyle(section).backgroundColor;
      
      // Apply the section's background color to the navbar
      navbar.style.backgroundColor = sectionBgColor;
    }
  });
}

// Event listener to detect scrolling
window.addEventListener('scroll', changeNavbarBackground);

// Initial call to set the navbar background on page load
changeNavbarBackground();

// ~~~~~~~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~~~~~~~~~~~~

