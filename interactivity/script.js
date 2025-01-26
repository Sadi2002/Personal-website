// Pobieranie elementów
const mobileBurger = document.querySelector(".burger-navigation");

// Przełączanie klasy active na burgerze
mobileBurger.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
});
