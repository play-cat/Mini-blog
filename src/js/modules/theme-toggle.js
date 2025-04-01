function switchTheme() {
  const themeToggleBtns = document.querySelectorAll('.btn_toggle-theme');

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      document.body.classList.toggle('dark');

      // Оновлюємо всі кнопки, щоб іконки були синхронізовані
      themeToggleBtns.forEach(button => {
        button.innerHTML = document.body.classList.contains('dark')
          ? '☀️'
          : '🌘';
      });
    });
  });
}

export default switchTheme;
