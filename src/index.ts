import './styles/styles.scss';
import toolsData from '../data/data.json';
import moment from 'moment';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
}

export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  const title = document.createElement('h1');
  title.textContent = 'Build Tools Showcase';

  const date = document.createElement('div');
  date.className = 'date';
  date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

  const themeSwitch = document.createElement('button');
  themeSwitch.className = 'theme-switch';
  themeSwitch.textContent = 'Toggle Theme';
  themeSwitch.addEventListener('click', toggleTheme);

  header.appendChild(title);
  header.appendChild(date);
  header.appendChild(themeSwitch);
  return header;
}

export function createToolCard(tool: Tool): HTMLElement {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
    <h3>${tool.name}</h3>
    <div class="category">${tool.category}</div>
    <p class="description">${tool.description}</p>
  `;
  return card;
}

export function createMainContent(): HTMLElement {
  const main = document.createElement('main');
  main.className = 'main';

  const toolsList = document.createElement('div');
  toolsList.className = 'tools-list';

  toolsData?.tools.forEach((tool: Tool) => {
    toolsList.appendChild(createToolCard(tool));
  });

  main.appendChild(toolsList);
  return main;
}

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<p>&copy; ${currentYear} Build Tools Showcase. All rights reserved.</p>`;
  return footer;
}

export function initApp(): void {
  const app = document.createElement('div');
  app.className = 'app';

  app.appendChild(createHeader());
  app.appendChild(createMainContent());
  app.appendChild(createFooter());

  document.body.appendChild(app);

  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

export function toggleTheme(): void {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

initApp();
