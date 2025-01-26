// Pobieranie elementów
const mobileBurger = document.querySelector(".burger-navigation");
const navMobileList = document.querySelector(".navigation-item");

// Przełączanie klasy active na burgerze
mobileBurger.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  navMobileList.classList.toggle("active");
});
