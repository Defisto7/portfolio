const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle("dark-mode-btn--active")
  document.body.classList.toggle("dark")
}