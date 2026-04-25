

(function () {
  const STORAGE_KEY = "theme";

  const btnDarkMode = document.getElementById("btn-darkmode");
  const body = document.body;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") applyDark();

  btnDarkMode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      applyLight();
    } else {
      applyDark();
    }
  });

  function applyDark() {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    btnDarkMode.querySelector(".icon").textContent  = "☾";
    btnDarkMode.querySelector(".label").textContent = "Dark";
    localStorage.setItem(STORAGE_KEY, "dark");
  }

  function applyLight() {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    btnDarkMode.querySelector(".icon").textContent  = "☀";
    btnDarkMode.querySelector(".label").textContent = "Light";
    localStorage.setItem(STORAGE_KEY, "light");
  }
})();