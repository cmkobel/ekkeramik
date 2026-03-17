// WebP detection — adds .no-webp class if unsupported
(function() {
  var img = new Image();
  img.onload = function() {};
  img.onerror = function() {
    document.documentElement.classList.add('no-webp');
  };
  img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
})();

// Sidebar toggle
document.getElementById('menu-close').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('sidebar-wrapper').classList.toggle('active');
});

document.getElementById('menu-toggle').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('sidebar-wrapper').classList.toggle('active');
});

// Close sidebar when a nav link is clicked
document.querySelectorAll('.sidebar-nav a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('sidebar-wrapper').classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href*="#"]:not([href="#"])');
  if (!link) return;
  if (link.pathname.replace(/^\//, '') !== location.pathname.replace(/^\//, '') &&
      link.hostname !== location.hostname) return;

  var target = document.querySelector(link.hash);
  if (!target) target = document.querySelector('[name="' + link.hash.slice(1) + '"]');
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
