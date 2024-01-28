export function getTemplate({
  redirectPath,
  withError
}: {
  redirectPath: string;
  withError: boolean;
}): string {
  return `
  <html lang="en" data-bs-theme="dark"><head>

    <meta charset="utf-8">
    
    
    
    
    <title>Authenticate</title>

    

    

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">

<link rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" href="https://getbootstrap.com/docs/5.3/dist/css/bootstrap.min.css">

    









    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
    html,
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input {
margin-bottom: 10px;
}

</style>

    
    
    
  </head>
  <body class="d-flex align-items-center py-4 bg-body-tertiary">
    

    

    
<main class="form-signin w-100 m-auto">
  <form method="post" action="/cfp_login">
    
    <h1 class="h3 mb-3 fw-normal">tlochsta media</h1>

    
    <div class="form-floating">
<input type="hidden" name="redirect" style="display:none;" value="${redirectPath}">
      <input type="password" name="password" class="form-control" autocomplete="current-password" autofocus="" placeholder="Password" required="" id="password">
      <label for="password">Site Password</label>
    </div>

    
    <button type="submit" class="btn btn-dark w-100 py-2">Sign in</button>
    <p class="mt-2 mb-3 text-body-secondary">© 2024 tlch.xyz</p>
${withError ? `<p class="mt-1 mb-3 text-danger">Incorrect password, please try again.</p>` : ''} 
  </form>
</main>
<script integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" src="https://getbootstrap.com/docs/5.3/dist/js/bootstrap.bundle.min.js"></script>

    

</body></html>
  `;
}
