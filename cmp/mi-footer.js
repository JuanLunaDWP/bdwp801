class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Luna Sánchez Juan Carlos.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
