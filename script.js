(function () {
  const cfg = window.SITE_CONFIG || {};
  const links = (cfg && cfg.links) || {};

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const instagram = document.getElementById('instagramLink');
  const behance = document.getElementById('behanceLink');
  const portfolioPdf = document.getElementById('resumeBtn');
  const emailBtn = document.getElementById('emailBtn');

  if (instagram && links.instagram) instagram.href = links.instagram;
  if (behance && links.behance) behance.href = links.behance;

  if (portfolioPdf) {
    if (links.portfolioPdf) {
      portfolioPdf.href = links.portfolioPdf;
      portfolioPdf.style.display = 'inline-flex';
    } else {
      portfolioPdf.style.display = 'none';
    }
  }

  if (emailBtn && links.email) emailBtn.href = `mailto:${links.email}`;
})();
