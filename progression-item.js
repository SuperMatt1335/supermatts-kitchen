class ProgressionItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const day = this.getAttribute('day') || '';
    const title = this.getAttribute('title') || '';
    const image = this.getAttribute('image') || '';
    const description = this.getAttribute('description') || '';
    const link = this.getAttribute('link') || '#';

    this.shadowRoot.innerHTML = `
      <style>
        .progression-item {
          background: white;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }
        .progression-item:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        .progression-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .progression-item img {
          width: 100%;
          height: 12rem;
          object-fit: cover;
          border-radius: 0.375rem;
          margin-bottom: 0.5rem;
        }
        .progression-item p {
          color: #4b5563;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .progression-item a {
          display: block;
          text-decoration: none;
          color: inherit;
        }
      </style>
      <div class="progression-item">
        <a href="${link}">
          <h3>${title}</h3>
          <img src="${image}" alt="${title}">
          <p>${description}</p>
        </a>
      </div>
    `;
  }
}

customElements.define('progression-item', ProgressionItem);