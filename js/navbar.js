class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: bold;
          font-size: 1.25rem;
          color: #4f46e5;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #4f46e5;
        }
        .nav-link.active {
          color: #4f46e5;
          font-weight: 600;
        }
      </style>
      <nav>
        <div class="nav-container">
            <a href="index.html" class="logo">Matthew Remley</a>
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home</a>
                <a href="eagle-project.html" class="nav-link">Eagle Project</a>
                <a href="recipes.html" class="nav-link">Recipe Blog</a>
                <a href="add-recipe.html" class="nav-link">Admin</a>
            </div>
</div>
      </nav>
    `;
// Highlight the current page link
 requestAnimationFrame(() => {
      const current = window.location.pathname.split("/").pop() || "index.html";
      const links = this.shadowRoot.querySelectorAll(".nav-link");
      links.forEach(link => {
        if (link.getAttribute("href") === current) {
          link.classList.add("active");
        }
      });
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);
