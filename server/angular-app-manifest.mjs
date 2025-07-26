
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/howydaahmed2023/papa-john-s-angular-project',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5508, hash: '833e93fd1546b430bb1fc529122382f626d9b63a706830eb9c5272151f7ce099', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1408, hash: 'e6f3714498c7f41061d788cfabf7e1467f6f413f699957e608c2b290f8a074a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W4ZLWBCA.css': {size: 232182, hash: 'ba88bciS75M', text: () => import('./assets-chunks/styles-W4ZLWBCA_css.mjs').then(m => m.default)}
  },
};
