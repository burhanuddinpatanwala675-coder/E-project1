
// Search Bar Navbar
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");

searchToggle.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

// Login Modal
const loginToggle = document.getElementById("loginToggle");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");

loginToggle.addEventListener("click", () => {
  loginOverlay.classList.add("active");
});

closeLogin.addEventListener("click", () => {
  loginOverlay.classList.remove("active");
});

// Close Modal When Clicking Outside
loginOverlay.addEventListener("click", (e) => {
  if (e.target === loginOverlay) {
    loginOverlay.classList.remove("active");
  }
});


// ================= INTRO PANEL =================

const introBtn = document.getElementById("introBtn");

const introPanel = document.getElementById("introPanel");

const introBackdrop =
  document.getElementById("introBackdrop");

const closeIntro =
  document.getElementById("closeIntro");

// OPEN
introBtn.addEventListener("click", () => {

  introPanel.classList.add("active");

  introBackdrop.classList.add("active");

});

// CLOSE BUTTON
closeIntro.addEventListener("click", () => {

  introPanel.classList.remove("active");

  introBackdrop.classList.remove("active");

});

// BACKDROP CLICK
introBackdrop.addEventListener("click", () => {

  introPanel.classList.remove("active");

  introBackdrop.classList.remove("active");

});

// CARD SECTION JAVASCRIPT

const backdrop =
  document.getElementById("panelBackdrop");

// OPEN
function openPanel(panelId) {

  document
    .getElementById(panelId)
    .classList.add("active");

  backdrop.classList.add("active");
}

// CLOSE
function closePanel(panelId) {

  document
    .getElementById(panelId)
    .classList.remove("active");

  backdrop.classList.remove("active");
}

// BACKDROP CLICK
backdrop.addEventListener("click", () => {

  document
    .querySelectorAll(".slide-panel")
    .forEach(panel => {

      panel.classList.remove("active");

    });

  backdrop.classList.remove("active");

});