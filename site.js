const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
const workMenus = document.querySelectorAll('.work-menu');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

workMenus.forEach(menu => {
  const button = menu.querySelector('button');
  if (!button) return;

  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', event => {
    event.stopPropagation();
    const open = menu.classList.toggle('work-open');
    button.setAttribute('aria-expanded', String(open));
  });
});

document.addEventListener('click', () => {
  workMenus.forEach(menu => {
    menu.classList.remove('work-open');
    const button = menu.querySelector('button');
    if (button) button.setAttribute('aria-expanded', 'false');
  });
});

if (document.body.classList.contains('case-page') && /\/truckbud\.html$/.test(location.pathname)) {
  const mobilePrototypeUrl = 'https://www.figma.com/proto/lCTq2D51cJX5qwWPGppWed/Truckbud--Copy-?node-id=2254-921&p=f&viewport=515%2C426%2C0.05&t=HjtdfVMiyHhhQTcl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2254%3A921&page-id=2254%3A919';
  const desktopPrototypeUrl = 'https://www.figma.com/proto/lCTq2D51cJX5qwWPGppWed/Truckbud--Copy-?node-id=2254-2201&p=f&viewport=515%2C426%2C0.05&t=HjtdfVMiyHhhQTcl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2254%3A921&page-id=2254%3A919';
  const prototypeLinkRows = [
    { x: '6.7%', y: '7.06%', size: '2.1vw' },
    { x: '7.9%', y: '38.36%', size: '1.35vw' },
    { x: '7.9%', y: '43.77%', size: '1.35vw' },
    { x: '7.4%', y: '50.97%', size: '1.35vw', preserveFigure: true },
    { x: '7.4%', y: '58.81%', size: '1.35vw' },
    { x: '8.2%', y: '67.61%', size: '1.35vw' },
    { x: '7.5%', y: '90.67%', size: '2.1vw' }
  ];
  const prototypeLinks = document.querySelectorAll('.prototype-hotspot');
  const caseBoard = document.querySelector('.case-board-wrap');

  prototypeLinks.forEach(link => {
    link.href = mobilePrototypeUrl;
  });

  if (caseBoard && !caseBoard.querySelector('.prototype-link-row')) {
    prototypeLinkRows.forEach((position, index) => {
      const row = document.createElement('div');
      const mobileLink = document.createElement('a');
      const desktopLink = document.createElement('a');
      row.className = 'prototype-link-row';
      if (position.preserveFigure) row.classList.add('preserve-figure');
      row.style.setProperty('--x', position.x);
      row.style.setProperty('--y', position.y);
      row.style.setProperty('--font-size', position.size);
      mobileLink.href = mobilePrototypeUrl;
      mobileLink.target = '_blank';
      mobileLink.rel = 'noopener';
      mobileLink.textContent = 'View prototype';
      desktopLink.href = desktopPrototypeUrl;
      desktopLink.target = '_blank';
      desktopLink.rel = 'noopener';
      desktopLink.textContent = 'View desktop prototype';
      row.append(mobileLink, document.createTextNode(' · '), desktopLink);
      caseBoard.appendChild(row);
    });
  }
}
