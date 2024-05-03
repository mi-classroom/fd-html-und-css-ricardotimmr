const button = document.querySelector("[data-js-menu-button]");
const menu = document.querySelector("[data-js-menu]");

button.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  button.classList.toggle("is-active");
});

const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");
const mainContent = document.querySelector("main");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    const isMeinBereich = this.textContent.trim() === "Mein Bereich";

    if (!isMeinBereich) {
      mainContent.classList.add("is-hidden");
    } else {
      mainContent.classList.remove("is-hidden");
    }

    tabLinks.forEach((link) => {
      link.classList.remove("is-active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("is-active");
    });

    this.classList.add("is-active");

    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add("is-active");
  });
});