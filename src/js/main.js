// Import our custom CSS
import '../scss/styles.scss'

import { injectNavbar, injectFooter, injectLucide } from './components.js';

injectNavbar();
injectFooter();

const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

updateButton('dark');

themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-bs-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    updateButton(next);
});

function updateButton(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '☀️'
        themeToggle.classList.toggle('btn-outline-light', true);
        themeToggle.classList.toggle('btn-outline-dark', false);
    } else {
        themeToggle.textContent = '🌙'
        themeToggle.classList.toggle('btn-outline-light', false);
        themeToggle.classList.toggle('btn-outline-dark', true);
    }
}

await injectLucide();
