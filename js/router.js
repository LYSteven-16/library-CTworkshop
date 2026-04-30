/* ========== SPA Router ========== */

var ROUTES = {
  home: {
    fragment: 'modules/home.html',
    title: 'Decoding the Library Heatmap — CT Workshop',
    navTitle: '🔍 CT Workshop',
    navLinks: [],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module1: {
    fragment: 'modules/module1.html',
    title: 'M1: Pain Point Discovery — Problem Introduction',
    navTitle: 'Module 1 / 6 — Pain Point Discovery',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module2', text: 'Next →' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module2: {
    fragment: 'modules/module2.html',
    title: 'M2: Deconstructing — Decomposition',
    navTitle: 'Module 2 / 6 — Deconstructing',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module1', text: '← Previous' },
      { hash: 'module3', text: 'Next →' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module3: {
    fragment: 'modules/module3.html',
    title: 'M3: Pattern Detective — Pattern Recognition',
    navTitle: 'Module 3 / 6 — Pattern Detective',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module2', text: '← Previous' },
      { hash: 'module4', text: 'Next →' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module4: {
    fragment: 'modules/module4.html',
    title: 'M4: Visual Designer — Abstraction',
    navTitle: 'Module 4 / 6 — Visual Designer',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module3', text: '← Previous' },
      { hash: 'module5', text: 'Next →' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module5: {
    fragment: 'modules/module5.html',
    title: 'M5: Algorithm Engineer — Algorithm Design',
    navTitle: 'Module 5 / 6 — Algorithm Engineer',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module4', text: '← Previous' },
      { hash: 'module6', text: 'Next →' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  },
  module6: {
    fragment: 'modules/module6.html',
    title: 'M6: Integration & Reflection',
    navTitle: 'Module 6 / 6 — Integration & Reflection',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: 'Back to Home' },
      { hash: 'module5', text: '← Previous' }
    ],
    banner: '💡 Return to your Figma 🗺️ Learning Roadmap to continue'
  }
};

var currentRoute = null;
var currentController = null;

function getRouteKey() {
  var hash = window.location.hash.slice(1) || 'home';
  return ROUTES[hash] ? hash : 'home';
}

function navigate(key) {
  if (!ROUTES[key]) key = 'home';
  window.location.hash = key;
}

function updateNavbar(config) {
  var navTitle = document.getElementById('navTitle');
  var navLinks = document.getElementById('navLinks');
  var navbar = document.getElementById('navbar');
  navbar.style.display = '';
  navTitle.textContent = t(config.navTitle);
  navLinks.innerHTML = config.navLinks.map(function(link) {
    return '<a href="#' + link.hash + '">' + (link.icon ? '<i class="fas ' + link.icon + '"></i> ' : '') + t(link.text) + '</a>';
  }).join('');
  if (!document.getElementById('langToggle')) {
    var btn = document.createElement('a');
    btn.id = 'langToggle'; btn.href = '#';
    btn.style.cssText = 'margin-left:12px;font-size:13px;font-weight:700;padding:4px 10px;border:2px solid rgba(255,255,255,0.4);border-radius:6px;cursor:pointer;color:white;text-decoration:none';
    btn.textContent = '中';
    btn.onclick = function(e) { e.preventDefault(); setLang(currentLang() === 'en' ? 'zh' : 'en'); currentRoute = null; handleRoute(); };
    navLinks.appendChild(btn);
  } else {
    document.getElementById('langToggle').textContent = currentLang() === 'en' ? '中' : 'EN';
  }
}

function updateBanner(config) {
  var el = document.getElementById('screenshotBannerText');
  if (el) el.textContent = t(config.banner);
}

function executeScripts(container) {
  container.querySelectorAll('script').forEach(function(oldScript) {
    var s = document.createElement('script');
    Array.from(oldScript.attributes).forEach(function(a) { s.setAttribute(a.name, a.value); });
    s.textContent = oldScript.textContent.replace(/\b(const|let)\s+(?=\w)/g, 'var ');
    oldScript.parentNode.replaceChild(s, oldScript);
  });
}

async function handleRoute() {
  var key = getRouteKey();
  if (key === currentRoute) return;
  var config = ROUTES[key];
  var app = document.getElementById('app');
  if (currentController) currentController.abort();
  currentController = new AbortController();
  document.title = t(config.title);
  updateNavbar(config);
  updateBanner(config);
  app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-spinner fa-spin" style="font-size:32px;color:var(--mid-blue);"></i><p style="margin-top:12px;color:var(--text-light);">' + t('Loading…') + '</p></div>';
  try {
    var res = await fetch(config.fragment, { signal: currentController.signal });
    if (!res.ok) throw new Error('Failed: ' + config.fragment);
    app.innerHTML = await res.text();
    executeScripts(app);
    applyI18n(app);
    window.scrollTo(0, 0);
    currentRoute = key;
    closeKnowledge();
  } catch (err) {
    if (err.name === 'AbortError') return;
    app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-exclamation-triangle" style="font-size:32px;color:var(--danger-red);"></i><p style="margin-top:12px;color:var(--text-light);">' + t('Loading…') + '</p></div>';
  }
}

window.addEventListener('hashchange', handleRoute);
document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href^="#"]');
  if (link && ROUTES[link.getAttribute('href').slice(1)]) { e.preventDefault(); navigate(link.getAttribute('href').slice(1)); }
});
window.addEventListener('DOMContentLoaded', handleRoute);
