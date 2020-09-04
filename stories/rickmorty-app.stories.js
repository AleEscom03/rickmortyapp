import { html } from 'lit-html';
import '../src/rickmorty-app.js';

export default {
  title: 'rickmorty-app',
};

export const App = () =>
  html`
    <rickmorty-app></rickmorty-app>
  `;
