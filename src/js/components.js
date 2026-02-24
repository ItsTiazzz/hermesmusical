export function injectNavbar() {
    const navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/info">Info</a></li>
            <li class="nav-item"><a class="nav-link" href="/rehearsals">Rehearsals</a></li>
          </ul>
          <button id="theme-toggle" class="btn btn-outline-light ms-auto"></button>
        </div>
      </div>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navbar);
}

export function injectFooter() {
    const footer = `
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
      <section class="d-flex justify-content-center p-2 border-bottom">
        <div>
          <a href="https://youtube.com/@HermesTheMusical" target="_blank" class="me-3 text-reset"><i data-lucide="youtube"></i></a>
          <a href="https://instagram.com" target="_blank" class="me-3 text-reset"><i data-lucide="instagram"></i></a>
          <a href="/discord" target="_blank" class="me-3 text-reset"><img height="24" width="24" src="https://cdn.simpleicons.org/discord/b2b5b9" /></a>
        </div>
      </section>
      <div class="text-center p-2">
        <i data-lucide="code" class="footer-dev-icon"></i> with <i data-lucide="heart" class="footer-heart-icon"></i> by <a class="text-reset" href="https://tiazzz.me" target="_blank">ItsTiazzz</a>
      </div>
    </footer>

    <script>
        lucide.createIcons();
    </script>`;
    document.body.insertAdjacentHTML('beforeend', footer);
}

export function injectLucide() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
        script.onload = () => {
            lucide.createIcons();
            resolve();
        };
        document.head.appendChild(script);
    });
}

