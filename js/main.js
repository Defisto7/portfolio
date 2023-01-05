const btnDarkMode = document.querySelector('.dark-mode-btn');

// Проверка темной темы в системных настройках

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// Проверка в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}


window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
 const newColorSheme = e.matches ? "dark" : "light";

  if (newColorSheme === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    localStorage.setItem('darkMode', 'dark')
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem('darkMode', 'light');
  }

})


btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
}