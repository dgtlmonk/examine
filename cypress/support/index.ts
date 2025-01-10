// Hide fetch/XHR requests
import 'cypress-axe';

const app = window.top;

if (!app?.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app?.document.createElement('style');
  if (style) {
    style.innerHTML =
      '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app?.document.head.appendChild(style);
  }
}
