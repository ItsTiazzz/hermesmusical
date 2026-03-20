export function injectHeader() {
    const header = `
    <header>
        <div class="carousel-container">
            <img src="/title.png" class="logo-overlay" alt="Logo">
            <div id="headerCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/carrousel/1.png" class="d-block w-100" alt="Slide 1">
                    </div>
                </div>
            </div>
        </div>
    </header>`
    document.body.insertAdjacentHTML('afterbegin', header);
}

export function injectNavbar() {
    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav w-100">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/about">About us</a></li>
                    <li class="nav-item"><a class="nav-link" href="/rehearsals">Rehearsals</a></li>
                </ul>
            </div>
        </div>
    </nav>`
    document.body.insertAdjacentHTML('afterbegin', navbar);
}

export function injectFooter() {
    const footer = `
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
      <section class="d-flex justify-content-center p-2 border-bottom">
        <div>
          <a href="https://youtube.com/@HermesTheMusical" target="_blank" 
          class="me-3 text-reset"><i data-lucide="youtube"></i></a>
          <a href="https://instagram.com" target="_blank"
          class="me-3 text-reset"><i data-lucide="instagram"></i></a>
          <a href="/discord" target="_blank" 
          class="me-3 text-reset"><img height="24" width="24" alt="Discord Logo"
          src="https://cdn.simpleicons.org/discord/b2b5b9" /></a>
        </div>
      </section>
      <div class="text-center p-2">
        © 2026 Hermes: The Musical. Content licensed under <a href="https://github.com/ItsTiazzz/hermesmusical/blob/master/LICENSE" target="_blank" 
          class="me-3 text-reset">TYSPAL-2.0</a>
        <br>
        <i data-lucide="code" class="footer-dev-icon"></i> with <i data-lucide="heart" class="footer-heart-icon"></i> by <a class="text-reset" href="https://tiazzz.me" target="_blank">ItsTiazzz</a>
      </div>
    </footer>`
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

export function injectBootstrap() {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
    });
}
