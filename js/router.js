/* ========== SPA Router ========== */

// Route definitions (Chinese source, t() handles translation at runtime)
var ROUTES = {
  home: {
    fragment: 'modules/home.html',
    title: '解碼圖書館熱力圖——計算思維自學工坊',
    navTitle: '🔍 解碼圖書館熱力圖',
    navLinks: [],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module1: {
    fragment: 'modules/module1.html',
    title: '模組 1：痛點挖掘 — 問題引入',
    navTitle: '模組 1 / 6 — 痛點挖掘',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module2', text: '下一模組 →' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module2: {
    fragment: 'modules/module2.html',
    title: '模組 2：解構問題 — 分解思維',
    navTitle: '模組 2 / 6 — 解構問題',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module1', text: '← 上一模組' },
      { hash: 'module3', text: '下一模組 →' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module3: {
    fragment: 'modules/module3.html',
    title: '模組 3：模式偵探 — 模式識別',
    navTitle: '模組 3 / 6 — 模式偵探',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module2', text: '← 上一模組' },
      { hash: 'module4', text: '下一模組 →' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module4: {
    fragment: 'modules/module4.html',
    title: '模組 4：視覺化設計師 — 抽象',
    navTitle: '模組 4 / 6 — 視覺化設計師',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module3', text: '← 上一模組' },
      { hash: 'module5', text: '下一模組 →' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module5: {
    fragment: 'modules/module5.html',
    title: '模組 5：算法工程師 — 算法設計',
    navTitle: '模組 5 / 6 — 算法工程師',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module4', text: '← 上一模組' },
      { hash: 'module6', text: '下一模組 →' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
  },
  module6: {
    fragment: 'modules/module6.html',
    title: '模組 6：系統整合與反思',
    navTitle: '模組 6 / 6 — 系統整合與反思',
    navLinks: [
      { hash: 'home', icon: 'fa-house', text: '返回首頁' },
      { hash: 'module5', text: '← 上一模組' }
    ],
    banner: '💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習'
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

  if (config.navLinks.length === 0) {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = '';
    navTitle.textContent = t(config.navTitle);
    navLinks.innerHTML = config.navLinks.map(function(link) {
      var icon = link.icon ? '<i class="fas ' + link.icon + '"></i> ' : '';
      return '<a href="#' + link.hash + '">' + icon + t(link.text) + '</a>';
    }).join('');
    // Add language toggle
    if (!document.getElementById('langToggle')) {
      var langBtn = document.createElement('a');
      langBtn.id = 'langToggle';
      langBtn.href = '#';
      langBtn.style.cssText = 'margin-left:12px;font-size:13px;font-weight:700;padding:4px 10px;border:2px solid rgba(255,255,255,0.4);border-radius:6px;cursor:pointer;color:white;text-decoration:none';
      langBtn.textContent = currentLang() === 'en' ? '中' : 'EN';
      langBtn.onclick = function(e) {
        e.preventDefault();
        var newLang = currentLang() === 'en' ? 'zh' : 'en';
        setLang(newLang);
        currentRoute = null; // force re-render
        handleRoute();
      };
      navLinks.appendChild(langBtn);
    } else {
      var ltb = document.getElementById('langToggle');
      ltb.textContent = currentLang() === 'en' ? '中' : 'EN';
    }
  }
}

function updateBanner(config) {
  var bannerText = document.getElementById('screenshotBannerText');
  if (bannerText) bannerText.textContent = t(config.banner);
}

function executeScripts(container) {
  var scripts = container.querySelectorAll('script');
  scripts.forEach(function(oldScript) {
    var newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach(function(attr) {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.textContent.replace(/\b(const|let)\s+(?=\w)/g, 'var ');
    oldScript.parentNode.replaceChild(newScript, oldScript);
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

  app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-spinner fa-spin" style="font-size:32px;color:var(--mid-blue);"></i><p style="margin-top:12px;color:var(--text-light);">' + t('載入中…') + '</p></div>';

  try {
    var response = await fetch(config.fragment, { signal: currentController.signal });
    if (!response.ok) throw new Error('Failed to load ' + config.fragment);
    var html = await response.text();

    app.innerHTML = html;
    executeScripts(app);
    // Translate text nodes
    applyI18n(app);
    window.scrollTo(0, 0);
    currentRoute = key;
    closeKnowledge();
  } catch (err) {
    if (err.name === 'AbortError') return;
    app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-exclamation-triangle" style="font-size:32px;color:var(--danger-red);"></i><p style="margin-top:12px;color:var(--text-light);">' + t('載入中…') + '</p></div>';
    console.error('Route load error:', err);
  }
}

window.addEventListener('hashchange', handleRoute);

document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href^="#"]');
  if (link) {
    var hash = link.getAttribute('href').slice(1);
    if (ROUTES[hash]) {
      e.preventDefault();
      navigate(hash);
    }
  }
});

window.addEventListener('DOMContentLoaded', handleRoute);
