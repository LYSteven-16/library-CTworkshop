/* ========== i18n — Complete paragraph-level translations ========== */
var I18N = { en: {

// ===== Shell / Navbar =====
'載入中…': 'Loading…',
'知道了！': 'Got it!',
'💡 記得回到 Figma 中的 🗺️ Learning Roadmap 繼續學習': '💡 Return to your Figma 🗺️ Learning Roadmap to continue',

// ===== Home: Hero =====
'🔍 解碼圖書館熱力圖': '🔍 Decoding the Library Heatmap',
'計算思維自學工坊 — 用 6 個模組掌握 CT 四大核心能力': 'CT Workshop — Master 4 Core CT Skills in 6 Modules',
'定義問題': 'Define Problem',
'分解': 'Decomposition',
'模式識別': 'Pattern Recognition',
'抽象': 'Abstraction',
'算法設計': 'Algorithm Design',

// ===== Home: Name Input =====
'👋 你的名字：': '👋 Your Name: ',
'輸入名字，領取專屬證書': 'Enter your name to get a certificate',
'確認': 'Confirm',
'✕ 重設': '✕ Reset',
'👋 開始你的學習旅程吧！': '👋 Begin your learning journey!',

// ===== Home: CT Overview Cards =====
'把大問題切成': 'Break big problems into',
'可管理的小部分': 'manageable parts',
'從數據中發現': 'Discover from data',
'重複的規律': 'recurring patterns',
'隱藏細節': 'Hide details',
'保留關鍵資訊': 'keep key info',
'設計精確的': 'Design precise',
'步驟序列': 'step sequences',

// ===== Home: Module Cards =====
'模組 1': 'Module 1',
'模組 2': 'Module 2',
'模組 3': 'Module 3',
'模組 4': 'Module 4',
'模組 5': 'Module 5',
'模組 6': 'Module 6',
'🎯 痛點挖掘': '🎯 Pain Point Discovery',
'🧅 解構問題': '🧅 Deconstructing',
'🔎 模式偵探': '🔎 Pattern Detective',
'🎨 視覺化設計師': '🎨 Visual Designer',
'⚙️ 算法工程師': '⚙️ Algorithm Engineer',
'🏆 系統整合與反思': '🏆 Integration & Reflection',
'問題引入：為什麼圖書館需要人流監控？投票、思考、排序，像工程師一樣定義問題。': 'Why do libraries need traffic monitoring? Vote, think, rank — define problems like an engineer.',
'分解思維：洋蔥模型剝開問題層次，卡片分類拆分系統模組，數據流排序理清順序。': 'Decomposition: Onion model peels back layers, card classification splits modules, data flow sequencing.',
'模式識別：從一週人流數據中找出高峰低谷、異常突增，學會連線配對和預測。': 'Pattern Recognition: Find peaks, troughs and anomalies in weekly data. Master matching and prediction.',
'抽象：從數據到界面，參考真實案例，搭建手機原型，選擇性呈現關鍵資訊。': 'Abstraction: From data to interface. Study real examples, build a phone prototype, selectively present key info.',
'核心模組：IR 感應器計數邏輯、防抖算法、流程圖填空，設計精確的計數方案。': 'Core module: IR sensor counting logic, debounce algorithm, flowchart fill-in. Design precise counting.',
'旅程回顧、概念測驗、自評雷達圖、反思便簽，完成後領取專屬證書！': 'Journey review, concept quiz, self-assessment radar, reflections — then get your certificate!',
'問題定義': 'Problem Def.',
'整合': 'Integration',
'約 20 分鐘': '~20 min',
'約 25 分鐘': '~25 min',
'約 30 分鐘': '~30 min',
'約 35 分鐘': '~35 min',
'約 40 分鐘': '~40 min',

// ===== Home: Instructions =====
'<i class="fas fa-info-circle" style="color:var(--mid-blue)"></i> 使用說明': '<i class="fas fa-info-circle" style="color:var(--mid-blue)"></i> How It Works',
'按順序完成': 'Complete in Order',
'從模組 1 到模組 6，': 'From Module 1 to 6,',
'每個模組環環相扣': 'each builds on the last',
'回到 Figma': 'Back to Figma',
'完成後回到 Figma': 'Return to Figma when done',
'🗺️ Learning Roadmap': '🗺️ Learning Roadmap',
'提交工作單': 'Submit Worksheet',
'全部完成後，': 'When all done,',
'提交 Figma 工作單': 'submit your Figma worksheet',
'總學習時間約 ': 'Total time: ~',
'3 小時': '3 hours',
'，建議分 2-3 次完成。隨時可透過導航列返回此首頁。': '. We recommend 2-3 sessions. Use the navbar to return anytime.',

// ===== Home: Reset =====
'<i class="fas fa-undo-alt"></i> 重新開始學習': '<i class="fas fa-undo-alt"></i> Restart Learning',
'<i class="fas fa-exclamation-triangle"></i> 確認重新開始': '<i class="fas fa-exclamation-triangle"></i> Confirm Restart',
'這將清除所有學習進度和輸入內容，': 'This will erase ALL progress and input,',
'包括姓名、完成狀態、工作單數據。': 'including your name, completion status, and worksheet data.',
'此操作無法復原！': 'This cannot be undone!',
'取消': 'Cancel',
'確認清除': 'Confirm Reset',

// ===== Home: JS-generated text =====
'✅ 歡迎，': '✅ Welcome, ',
'！點擊模組卡片開始學習吧 🎉': '! Click a module card to get started 🎉',
'歡迎，': 'Welcome, ',
'！🎉': '! 🎉',
'開始學習吧！證書將使用預設稱呼 😊': 'Starting! Your certificate will use a default name 😊',
'名字已清除，請重新輸入 ✏️': 'Name cleared. Enter a new one ✏️',
'所有進度已清除，可以重新開始了 ✨': 'All progress cleared. Ready for a fresh start ✨',
'👋 歡迎回來，': '👋 Welcome back, ',
'！繼續你的學習旅程吧': '! Continue your learning journey.',

// ===== Router navigation =====
'返回首頁': 'Back to Home',
'← 上一模組': '← Previous',
'下一模組 →': 'Next →',
'模組 1 / 6 — 痛點挖掘': 'Module 1/6 — Pain Point Discovery',
'模組 2 / 6 — 解構問題': 'Module 2/6 — Deconstructing',
'模組 3 / 6 — 模式偵探': 'Module 3/6 — Pattern Detective',
'模組 4 / 6 — 視覺化設計師': 'Module 4/6 — Visual Designer',
'模組 5 / 6 — 算法工程師': 'Module 5/6 — Algorithm Engineer',
'模組 6 / 6 — 系統整合與反思': 'Module 6/6 — Integration & Reflection',
'模組 1：痛點挖掘 — 問題引入': 'M1: Pain Point Discovery — Problem Introduction',
'模組 2：解構問題 — 分解思維': 'M2: Deconstructing — Decomposition',
'模組 3：模式偵探 — 模式識別': 'M3: Pattern Detective — Pattern Recognition',
'模組 4：視覺化設計師 — 抽象': 'M4: Visual Designer — Abstraction',
'模組 5：算法工程師 — 算法設計': 'M5: Algorithm Engineer — Algorithm Design',
'模組 6：系統整合與反思': 'M6: Integration & Reflection',
'🔍 解碼圖書館熱力圖': '🔍 Decoding the Library Heatmap',

}};

// zh = keys themselves
I18N.zh = {};
Object.keys(I18N.en).forEach(function(k) { I18N.zh[k] = k; });

// ========== Translation functions ==========
function t(key) {
  var lang = localStorage.getItem('ct_lang') || 'en';
  var dict = I18N[lang] || I18N.en;
  if (dict[key] !== undefined) return dict[key];
  return key;
}
function currentLang() {
  return localStorage.getItem('ct_lang') || 'en';
}
function setLang(lang) {
  localStorage.setItem('ct_lang', lang);
}

var _re = null;
function _getRegex() {
  if (_re) return _re;
  var keys = Object.keys(I18N.en).filter(function(k) { return I18N.en[k] !== k && k.length >= 2; });
  keys.sort(function(a, b) { return b.length - a.length; });
  var esc = keys.map(function(k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
  _re = new RegExp('(' + esc.join('|') + ')', 'g');
  return _re;
}

function applyI18n(container) {
  if (currentLang() === 'zh') { console.log('[i18n] skipped (zh mode)'); return; }
  var re = _getRegex();
  var dict = I18N.en;
  var count = 0;
  function tr(str) { return str.replace(re, function(m) { count++; return dict[m] || m; }); }
  var w = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  var n;
  while (n = w.nextNode()) {
    var txt = n.nodeValue;
    if (txt.trim().length && /[\u4e00-\u9fff]/.test(txt)) {
      var m = txt.match(/^(\s*)([\s\S]*?)(\s*)$/);
      var c = m ? m[2] : txt;
      var r = tr(c);
      if (r !== c) n.nodeValue = (m ? m[1] : '') + r + (m ? m[3] : '');
    }
  }
  console.log('[i18n] applied:', count, 'replacements in', container.tagName || 'container');
  container.querySelectorAll('[placeholder]').forEach(function(el) {
    var v = el.getAttribute('placeholder');
    if (v && /[\u4e00-\u9fff]/.test(v)) {
      var t2 = t(v); if (t2 !== v) el.setAttribute('placeholder', t2);
    }
  });
}

(function() {
  if (typeof MutationObserver === 'undefined') return;
  var obs = new MutationObserver(function(ms) {
    ms.forEach(function(m) {
      m.addedNodes.forEach(function(n) {
        if (n.nodeType === 1) applyI18n(n);
        else if (n.nodeType === 3 && /[\u4e00-\u9fff]/.test(n.nodeValue||'')) applyI18n(n.parentNode);
      });
    });
  });
  var iv = setInterval(function() {
    var a = document.getElementById('app');
    if (a) { obs.observe(a, { childList: true, subtree: true }); clearInterval(iv); }
  }, 100);
})();
