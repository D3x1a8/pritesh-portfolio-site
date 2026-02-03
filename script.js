(function () {
  const cfg = window.SITE_CONFIG || {};
  const links = (cfg && cfg.links) || {};

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const github = document.getElementById('githubLink');
  const linkedin = document.getElementById('linkedinLink');
  const resume = document.getElementById('resumeBtn');
  const emailBtn = document.getElementById('emailBtn');

  if (github && links.github) github.href = links.github;
  if (linkedin && links.linkedin) linkedin.href = links.linkedin;
  if (resume) {
    if (links.resume) {
      resume.href = links.resume;
      resume.style.display = 'inline-flex';
    } else {
      resume.style.display = 'none';
    }
  }
  if (emailBtn && links.email) emailBtn.href = `mailto:${links.email}`;
})();
