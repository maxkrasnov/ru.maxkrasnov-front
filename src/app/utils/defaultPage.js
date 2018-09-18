const defaultPage = (html, preloadState, helmet, version = '1.0.9') => {
    return `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- Developed by Max Krasnov <me@maxkrasnov.ru> -->
            <link rel="icon" href="/favicon.ico" type="image/ico" />
            <link rel="stylesheet" href="/assets/app.bundle.css?v=${version}">
            ${typeof helmet.title !== 'undefined' ? helmet.title.toString() : ''}
            ${typeof helmet.meta !== 'undefined' ? helmet.meta.toString() : ''}
            ${typeof helmet.link !== 'undefined' ? helmet.link.toString() : ''}
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
            <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter46521003 = new Ya.Metrika2({ id:46521003, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/46521003" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
            <!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-56160960-2"></script><script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-56160960-2');</script>
          </body>
        </html>`
}
export default defaultPage;
