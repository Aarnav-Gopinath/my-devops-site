const themeToggle = document.getElementById('themeToggle');
const messageButton = document.getElementById('messageButton');
const messageOutput = document.getElementById('messageOutput');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('site-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

messageButton.addEventListener('click', () => {
  messageOutput.textContent = 'Nice! Your sample AWS site is ready to deploy.';
});

const savedTheme = localStorage.getItem('site-theme') || 'light';
setTheme(savedTheme);
