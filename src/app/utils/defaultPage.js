const defaultPage = (html, preloadState, helmet, version = '1.0.0') => {
    return `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- Developed by Max Krasnov <me@maxkrasnov.ru> -->
            <link rel="icon" href="/favicon.ico" type="image/ico" />
            <link rel="stylesheet" href="/assets/app.bundle.css?v=${version}">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            <link rel="manifest" href="/manifest.json">
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
            <meta name="theme-color" content="#ffffff">
          </head>
          <body>
            <noscript>Для корректной работы сайта <strong>необходимо включить поддержку JavaScript</strong></noscript>
            <div id="root">${html}</div>
            <script>
              console.log('%c Developed by Max Krasnov <me@maxkrasnov.ru>.', 'color: #ffffff; background: #444444')
              window.__PRELOAD_STATE__ = ${JSON.stringify(preloadState).replace(/</g, '\\\u003c')}
            </script>
            <script type="text/javascript" src="/assets/app.bundle.js?v=${version}"></script>
          </body>
        </html>`
}
export default defaultPage;
