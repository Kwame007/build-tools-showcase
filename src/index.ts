import './style.scss';
import toolsData from '../data/data.json';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
}

function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = '<h1>Build Tools Showcase</h1>';
  return header;
}

function createToolCard(tool: Tool): HTMLElement {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
    <h3>${tool.name}</h3>
    <div class="category">${tool.category}</div>
    <p class="description">${tool.description}</p>
  `;
  return card;
}

function createMainContent(): HTMLElement {
  const main = document.createElement('main');
  main.className = 'main';
  
  const toolsList = document.createElement('div');
  toolsList.className = 'tools-list';
  
  toolsData.tools.forEach((tool: Tool) => {
    toolsList.appendChild(createToolCard(tool));
  });
  
  main.appendChild(toolsList);
  return main;
}

function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<p>&copy; ${currentYear} Build Tools Showcase. All rights reserved.</p>`;
  return footer;
}

function initApp() {
  const app = document.createElement('div');
  app.className = 'app';
  
  app.appendChild(createHeader());
  app.appendChild(createMainContent());
  app.appendChild(createFooter());
  
  document.body.appendChild(app);
}

initApp();