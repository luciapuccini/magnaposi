/// <reference path="./types/global.d.ts" />

function openPDF(): void {
  window.open(
    './assets/Magnaposi_Eng_Datashet_3.02.pdf',
    '_blank',
    'width=800,height=1000'
  );
}

function setUser(): void {
  const emailEl = document.getElementById('email');
  const userNameEl = document.getElementById('userName');

  if (window.mixpanel) {
    window.mixpanel.people.set({
      $email: (emailEl as HTMLInputElement)?.value,
      name: (userNameEl as HTMLInputElement)?.value,
      $created: new Date(),
    });
    window.mixpanel.identify((userNameEl as HTMLInputElement)?.value);
  }
}

function initBreakpoints(): void {
  breakpoints({
    wide: ['1281px', '1680px'],
    normal: ['981px', '1280px'],
    narrow: ['841px', '980px'],
    narrower: ['737px', '840px'],
    mobile: ['481px', '736px'],
    mobilep: [null, '480px'],
  });
}

function initAnimations(): void {
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);
  });
}

function initLogoTracking(): void {
  if (window.mixpanel) {
    window.mixpanel.track_links('#header a', 'click CYS LOGO', {
      referrer: document.referrer,
    });
  }
}

function initContactForm(): void {
  const form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', () => {
      setTimeout(setUser, 0);
    });
  }
}

function initializeApp(): void {
  initBreakpoints();
  initAnimations();
  initLogoTracking();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

(window as any).openPDF = openPDF;
(window as any).setUser = setUser;
