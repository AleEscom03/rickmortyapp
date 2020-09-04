import { LitElement, html, css, query } from 'lit-element';
import '../node_modules/item-api/item-api';
import '../node_modules/data-manager/data-manager';

export class RickmortyApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      dataRM: { type: Array },
    };
  }

  constructor(){
    super();
    this.dataRM = [];
  }

  static get styles() {
    return css`
      :host {
        align-items: center;
        color: #1a2b42;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <h1>App Rick & Morty</h1>
      <data-manager @info-loaded="${this.infoReceived}"></data-manager>
      ${this.dataRM.map(i => html`<item-api name="${i.name}" id="${i.id}" imgUrl="${i.image}"></item-api>`)}
    `;
  }

  infoReceived(e) {
    this.dataRM = e.detail;
  }

}
