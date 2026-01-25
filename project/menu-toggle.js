/* Menu Toggle
   by Chris Winikka
   Attach a click handler to the toggle menu button
   When clicked, it will toggle the hidden classes on
   the nav and ul.
*/

// Target programmable elements
const menuButton = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const mainMenu = document.getElementById("main-menu");

// Create menu click handler
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
   mainNav.classList.toggle("minimized");
   mainMenu.classList.toggle("hidden");
}
