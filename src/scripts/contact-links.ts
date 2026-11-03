import { contact, mobileLinks } from '../data/site';

// En móvil, los botones de contacto abren las apps en lugar de la web.
// En escritorio no se toca nada: Gmail web y LinkedIn en una pestaña nueva.
const ua = navigator.userAgent;
const isIOS = /iPhone|iPad|iPod/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1);
const isAndroid = /Android/.test(ua);

if (isIOS || isAndroid) {
  document.querySelectorAll<HTMLAnchorElement>('a[data-contact="linkedin"]').forEach((a) => {
    // Misma pestaña: así el sistema abre la app de LinkedIn si está instalada.
    a.removeAttribute('target');
    if (isAndroid) a.href = mobileLinks.linkedinAndroid;
    else a.href = contact.linkedin;
  });

  document.querySelectorAll<HTMLAnchorElement>('a[data-contact="email"]').forEach((a) => {
    a.removeAttribute('target');
    if (isAndroid) {
      a.href = mobileLinks.mailto;
      return;
    }
    // iOS: intenta abrir la app de Gmail; si no está instalada, abre la app de correo.
    a.href = mobileLinks.gmailApp;
    a.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = mobileLinks.gmailApp;
      window.setTimeout(() => {
        if (document.visibilityState === 'visible') window.location.href = mobileLinks.mailto;
      }, 1200);
    });
  });
}
