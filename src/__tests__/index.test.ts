import { JSDOM } from 'jsdom';
import { createHeader, createToolCard, toggleTheme } from '../index';

describe('Build Tools Showcase', () => {
  beforeEach(() => {
    // Setup DOM
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;
  });

  describe('createHeader', () => {
    it('creates header with title', () => {
      const header = createHeader();
      expect(header.querySelector('h1')?.textContent).toBe(
        'Build Tools Showcase'
      );
    });
  });

  describe('createToolCard', () => {
    it('creates card with tool information', () => {
      const tool = {
        id: 1,
        name: 'Test Tool',
        description: 'Test Description',
        category: 'Test Category',
      };
      const card = createToolCard(tool);
      expect(card.querySelector('h3')?.textContent).toBe('Test Tool');
      expect(card.querySelector('.category')?.textContent).toBe(
        'Test Category'
      );
    });
  });

  describe('toggleTheme', () => {
    it('toggles theme between light and dark', () => {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleTheme();
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    });
  });
});
