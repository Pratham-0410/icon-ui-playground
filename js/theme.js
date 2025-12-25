const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
  icon.className =
    theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";
  setTheme(newTheme);
});
