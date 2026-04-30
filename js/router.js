/* ========== SPA Router ========== */

// Route definitions
const ROUTES = {
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

// Current route state
let currentRoute = null;
let currentController = null; // for aborting stale fetches

// Get route key from hash
function getRouteKey() {
  const hash = window.location.hash.slice(1) || 'home';
  return ROUTES[hash] ? hash : 'home';
}

// Navigate to a route
function navigate(key) {
  if (!ROUTES[key]) key = 'home';
  window.location.hash = key;
}

// Update navbar based on route config
function updateNavbar(config) {
  const navTitle = document.getElementById('navTitle');
  const navLinks = document.getElementById('navLinks');
  const navbar = document.getElementById('navbar');

  if (config.navLinks.length === 0) {
    // Home page — hide navbar
    navbar.style.display = 'none';
  } else {
    navbar.style.display = '';
    navTitle.textContent = config.navTitle;
    navLinks.innerHTML = config.navLinks.map(link => {
      const icon = link.icon ? '<i class="fas ' + link.icon + '"></i> ' : '';
      return '<a href="#' + link.hash + '">' + icon + link.text + '</a>';
    }).join('');
  }
}

// Update screenshot banner
function updateBanner(config) {
  const bannerText = document.getElementById('screenshotBannerText');
  if (bannerText) bannerText.textContent = config.banner;
}

// Execute inline scripts in loaded content
function executeScripts(container) {
  const scripts = container.querySelectorAll('script');
  scripts.forEach(function(oldScript) {
    const newScript = document.createElement('script');
    // Copy all attributes
    Array.from(oldScript.attributes).forEach(function(attr) {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.textContent;
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

// Main route handler
async function handleRoute() {
  const key = getRouteKey();
  if (key === currentRoute) return; // avoid redundant loads

  const config = ROUTES[key];
  const app = document.getElementById('app');

  // Abort previous fetch if still in progress
  if (currentController) currentController.abort();
  currentController = new AbortController();

  // Update UI shell immediately
  document.title = config.title;
  updateNavbar(config);
  updateBanner(config);

  // Show loading state
  app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-spinner fa-spin" style="font-size:32px;color:var(--mid-blue);"></i><p style="margin-top:12px;color:var(--text-light);">載入中…</p></div>';

  try {
    const response = await fetch(config.fragment, { signal: currentController.signal });
    if (!response.ok) throw new Error('Failed to load ' + config.fragment);
    const html = await response.text();

    // Inject content
    app.innerHTML = html;

    // Execute any inline scripts
    executeScripts(app);

    // Scroll to top
    window.scrollTo(0, 0);

    // Update route state
    currentRoute = key;

    // Close knowledge overlay if open
    closeKnowledge();

  } catch (err) {
    if (err.name === 'AbortError') return; // fetch was aborted, ignore
    app.innerHTML = '<div style="text-align:center;padding:60px 20px;"><i class="fas fa-exclamation-triangle" style="font-size:32px;color:var(--danger-red);"></i><p style="margin-top:12px;color:var(--text-light);">載入失敗，請重新整理頁面。</p></div>';
    console.error('Route load error:', err);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);

// Also intercept link clicks for smoother navigation
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const hash = link.getAttribute('href').slice(1);
    if (ROUTES[hash]) {
      e.preventDefault();
      navigate(hash);
    }
  }
});

// Initial route on page load
window.addEventListener('DOMContentLoaded', handleRoute);
