/* ========== Worksheet Printer ========== */
/* Uses browser's native print → Save as PDF workflow */

function printWorksheet() {
  var D = getWorksheetData();
  var name = getStudentName() || '同學';
  var now = new Date();
  var dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
  var progress = JSON.parse(localStorage.getItem('ct_workshop_progress') || '{}');
  var completed = Object.keys(progress).length;

  function v(key) { return D[key] || ''; }
  function vv(key) { var x = v(key); return x || '（未填寫）'; }

  var html = '<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8">' +
    '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">' +
    '<style>' + getPrintStyles() + '</style></head><body><div class="ws">';

  // Header
  html += '<div class="ws-hd"><div><h1>🔍 解碼圖書館熱力圖</h1><div class="sub">計算思維自學工坊 — 學習工作單</div></div>' +
    '<div class="ws-meta"><strong>' + name + '</strong>' + dateStr + '<br>完成 ' + completed + ' / 6 模組</div></div>';

  // CT Path
  var ctColors = ['#EF4444','#F59E0B','#0EA5E9','#EC4899','#8B5CF6'];
  html += '<div class="ws-path">';
  for (var i = 0; i < 5; i++) {
    html += '<div class="dot" style="background:' + ctColors[i] + '">' + (i+1) + '</div>';
    if (i < 4) html += '<div class="line"></div>';
  }
  html += '</div>';

  html += '<div class="ws-body">';

  // ===== Module 1 =====
  html += mod('模組 1：痛點挖掘 — 問題引入', '問題定義', '#EF4444');
  var voteOpts = ['0 次','1-3 次','4-6 次','7 次以上'];
  html += '<div class="lbl">📊 投票：你去圖書館時遇到過幾次沒座位？</div><div class="vote-row">';
  voteOpts.forEach(function(o) {
    html += '<span class="vt' + (o === v('m1_vote') ? ' sel' : '') + '">' + o + '</span>';
  });
  html += '</div><div class="lbl">💭 思考泡泡</div><div class="txt">' + vv('m1_thought') + '</div>';
  var sortArr = v('m1_sort');
  if (sortArr && sortArr.length) {
    html += '<div class="lbl">📋 問題排序</div><div class="sort">';
    sortArr.forEach(function(s, i) { html += '<div class="si"><div class="sn">' + (i+1) + '</div>' + s + '</div>'; });
    html += '</div>';
  }
  html += '</div></div>';

  // ===== Module 2 =====
  html += mod('模組 2：解構問題 — 分解', '分解', '#F59E0B');
  var flowArr = v('m2_flow');
  if (flowArr && flowArr.length) {
    html += '<div class="lbl">🔄 數據流排序</div><div class="flow">';
    flowArr.filter(Boolean).forEach(function(s, i) {
      if (i > 0) html += '<span class="fa">&rarr;</span>';
      html += '<span class="fs">' + s + '</span>';
    });
    html += '</div>';
  }
  html += '<div class="lbl">📦 卡片分類</div><div class="txt">' + vv('m2_classify') + '</div>';
  html += '</div></div>';

  // ===== Module 3 =====
  html += mod('模組 3：模式偵探 — 模式識別', '模式識別', '#0EA5E9');
  var matchArr = v('m3_match');
  if (matchArr && matchArr.length) {
    html += '<div class="lbl">🔗 模式配對</div>';
    matchArr.forEach(function(p) {
      html += '<div class="mr"><div class="ml">' + p.left + '</div><span class="mc">&rarr;</span><div class="mr2">' + p.right + '</div></div>';
    });
  }
  html += '<div class="lbl">⚠️ 異常數據判斷</div><div class="anomaly">' + vv('m3_anomaly') + '</div>';
  html += '<div class="lbl">🔮 雨天預測</div><div class="txt">' + vv('m3_predict') + '</div>';
  html += '</div></div>';

  // ===== Module 4 =====
  html += mod('模組 4：視覺化設計師 — 抽象', '抽象', '#EC4899');
  var checklist = v('m4_checklist');
  if (checklist && checklist.length) {
    html += '<div class="lbl">✅ 設計檢查清單</div><div class="chk">';
    checklist.forEach(function(item) {
      html += '<div class="ci' + (item.checked ? ' ok' : '') + '"><span class="cb">✓</span>' + item.text + '</div>';
    });
    html += '</div>';
  }
  var design = v('m4_design');
  if (design && design.length) {
    html += '<div class="lbl">📱 手機原型設計</div><div class="phone">';
    design.forEach(function(s) { html += '<div class="pi">' + s + '</div>'; });
    html += '</div>';
  }
  html += '<div class="lbl">💬 抽象反思</div><div class="txt">' + vv('m4_reflect') + '</div>';
  html += '</div></div>';

  // ===== Module 5 =====
  html += mod('模組 5：算法工程師 — 算法設計', '算法設計', '#8B5CF6');
  var debRes = v('m5_debounce_result');
  html += '<div class="lbl">⏱ 去抖測試：<b>' + vv('m5_debounce') + '</b></div>';
  if (debRes && debRes.total) {
    html += '<div class="deb"><div class="dm"><div class="dn">' + debRes.total + '</div><div class="dl">總人數</div></div>' +
      '<div class="dm"><div class="dn" style="color:#F59E0B">' + debRes.fp + '</div><div class="dl">誤報</div></div>' +
      '<div class="dm"><div class="dn" style="color:#10B981">' + debRes.missed + '</div><div class="dl">漏計</div></div>' +
      '<div class="dm"><div class="dn">' + debRes.acc + '%</div><div class="dl">準確率</div></div></div>';
  }
  html += '<div class="lbl">🔀 流程圖填空</div>';
  html += '<div class="fc">' +
    fcNode('IR 感測器觸發', 's') + '<div class="fcd">⬇</div>' +
    fcNode('方向判定', 'd') + '<div class="fcd">⬇</div>' +
    '<div class="fc2">' + fcNode('enter_count += 1', 'f') + fcNode('exit_count += 1', 'f') + '</div><div class="fcd">⬇</div>' +
    fcNode('更新 current_count = enter - exit', 'f') + '<div class="fcd">⬇</div>' +
    fcNode('邊界保護：人數不能為負', 'f') + '<div class="fcd">⬇</div>' +
    fcNode('等待去抖時間窗口，過濾假信號', 'f') +
    '</div>';
  html += '<div style="text-align:center;font-weight:700;margin-top:4px;">' + vv('m5_flowchart') + '</div>';
  html += '</div></div>';

  // ===== Module 6 =====
  html += mod('模組 6：系統整合與反思', '整合', '#10B981');
  html += '<div class="lbl">🧠 概念測驗</div>';
  var quizQs = [
    '1. 拆成三個模組屬？', '2. 先遮A再遮B=進入屬？', '3. 紅綠燈代替人數屬？', '4. 上午10-12點是高峰屬？'
  ];
  var qOpts = [
    ['A','B','C','D'], ['A','B','C','D'], ['A','B','C','D'], ['A','B','C','D']
  ];
  var quizDetail = v('m6_quiz_detail');
  html += '<div class="qz">';
  for (var qi = 0; qi < 4; qi++) {
    html += '<div class="qq">' + quizQs[qi] + '</div><div class="qo">';
    qOpts[qi].forEach(function(opt, oi) {
      var cls = '';
      if (quizDetail && quizDetail[qi]) {
        if (quizDetail[qi].chosen === opt) cls = quizDetail[qi].right ? ' cor' : ' wrg';
        else if (quizDetail[qi].correct === opt) cls = ' ans';
      }
      html += '<span class="qopt' + cls + '">' + opt + '</span>';
    });
    html += '</div>';
  }
  html += '</div><div style="text-align:center;font-size:16px;font-weight:900;">得分：' + vv('m6_quiz') + '</div>';

  // Radar
  html += '<div class="lbl">📊 能力自評</div>';
  var radar = v('m6_radar');
  var rLabels = ['分解','模式識別','抽象','算法設計'];
  var rColors = ['#F59E0B','#0EA5E9','#EC4899','#8B5CF6'];
  if (radar && radar[rLabels[0]]) {
    html += '<div class="rd">';
    rLabels.forEach(function(l, i) {
      var s = radar[l] || 5;
      html += '<div class="ri"><div class="ro"><div class="rb" style="height:' + (s*10) + '%;background:' + rColors[i] + '"></div></div><div class="rl">' + l + '</div><div class="rs">' + s + '</div></div>';
    });
    html += '</div>';
  }

  html += '<div class="lbl">💬 反思</div>';
  html += '<div class="txt">' + vv('m6_reflect1') + '</div>';
  html += '<div class="txt">' + vv('m6_reflect2') + '</div>';
  html += '<div class="txt">' + vv('m6_reflect3') + '</div>';
  html += '</div></div>';

  html += '</div><div class="ws-ft">解碼圖書館熱力圖 — 計算思維自學工坊<span>系統自動生成</span></div></div></body></html>';

  // Create hidden iframe and print
  var oldFrame = document.getElementById('wsPrintFrame');
  if (oldFrame) oldFrame.remove();

  var iframe = document.createElement('iframe');
  iframe.id = 'wsPrintFrame';
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:9999;background:white;';
  document.body.appendChild(iframe);

  var doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();

  iframe.onload = function() {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    // Remove iframe after print dialog closes (or after timeout)
    setTimeout(function() {
      var f = document.getElementById('wsPrintFrame');
      if (f) f.remove();
    }, 5000);
  };
  // Fallback: if onload doesn't fire soon, still print
  setTimeout(function() {
    var f = document.getElementById('wsPrintFrame');
    if (f && f.contentWindow) {
      f.contentWindow.focus();
      f.contentWindow.print();
    }
  }, 1000);
}

/* ===== Helpers ===== */

function mod(title, ct, color) {
  return '<div class="wm"><div class="wh" style="background:' + color + '">' +
    '<span class="wn">' + title + '</span><span class="wct">' + ct + '</span></div><div class="wb">';
}

function fcNode(text, type) { return '<span class="fcn ' + type + '">' + text + '</span>'; }

/* ===== Print Styles ===== */
function getPrintStyles() {
  return [
    '*{margin:0;padding:0;box-sizing:border-box}', 'body{font-family:"Noto Sans TC",sans-serif;background:white;display:flex;justify-content:center}',
    '.ws{width:210mm;background:white}',
    '.ws-hd{background:linear-gradient(135deg,#1E3A8A,#3B82F6);padding:18px 20px;color:white;display:flex;justify-content:space-between;align-items:center}',
    '.ws-hd h1{font-size:20px;font-weight:900}', '.sub{font-size:11px;opacity:.8;margin-top:2px}',
    '.ws-meta{font-size:11px;text-align:right;line-height:1.8;background:rgba(255,255,255,.1);padding:6px 12px;border-radius:6px}',
    '.ws-path{display:flex;align-items:center;justify-content:center;gap:0;padding:12px 0 8px;background:#F9FAFB;border-bottom:1px solid #E5E7EB}',
    '.dot{width:24px;height:24px;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;flex-shrink:0}',
    '.line{width:22px;height:2px;background:#D1D5DB;flex-shrink:0}',
    '.ws-body{padding:14px 18px}',
    '.wm{margin-bottom:12px;page-break-inside:avoid;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden}',
    '.wh{display:flex;align-items:center;gap:8px;padding:8px 14px;color:white;font-weight:700;font-size:12px}',
    '.wn{font-size:10px;background:rgba(255,255,255,.25);padding:2px 8px;border-radius:10px}',
    '.wct{margin-left:auto;font-size:10px;background:rgba(0,0,0,.15);padding:2px 8px;border-radius:10px}',
    '.wb{padding:10px 14px}',
    '.lbl{font-size:10px;color:#1E3A8A;font-weight:600;margin:6px 0 3px}',
    '.txt{font-size:11px;color:#374151;line-height:1.6;padding:6px 8px;background:#F9FAFB;border-radius:6px;margin-bottom:4px;white-space:pre-wrap}',
    '.vote-row{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:4px}',
    '.vt{padding:5px 12px;border-radius:20px;border:2px solid #E5E7EB;font-size:10px;color:#6B7280}',
    '.vt.sel{border-color:#EF4444;background:#FEF2F2;color:#B91C1C;font-weight:700}',
    '.sort{border:1px solid #E5E7EB;border-radius:6px;overflow:hidden;margin-bottom:4px}',
    '.si{display:flex;align-items:center;gap:8px;padding:6px 10px;border-bottom:1px solid #F3F4F6;font-size:11px}',
    '.si:last-child{border-bottom:none}', '.sn{width:20px;height:20px;border-radius:50%;background:#1E3A8A;color:white;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;flex-shrink:0}',
    '.flow{display:flex;align-items:center;gap:3px;flex-wrap:wrap;margin-bottom:4px}',
    '.fs{padding:5px 8px;border-radius:6px;font-size:9px;font-weight:600;border:2px solid #10B981;background:#D1FAE5;color:#065F46}',
    '.fa{color:#9CA3AF;font-size:10px;flex-shrink:0}',
    '.mr{display:flex;align-items:center;gap:6px;margin-bottom:3px;font-size:10px}',
    '.ml{padding:4px 8px;border-radius:6px;flex:1;background:#EFF6FF;border:1px solid #BFDBFE;text-align:right}',
    '.mr2{padding:4px 8px;border-radius:6px;flex:1;background:#FDF2F8;border:1px solid #FBCFE8}',
    '.mc{color:#0EA5E9;font-weight:700;flex-shrink:0}',
    '.anomaly{padding:6px 10px;background:#FEF3C7;border-radius:6px;font-size:11px;font-weight:600;color:#78350F;margin-bottom:4px}',
    '.chk{margin-bottom:4px}', '.ci{display:flex;align-items:center;gap:6px;padding:3px 0;font-size:10px}',
    '.cb{width:16px;height:16px;border-radius:4px;border:2px solid #D1D5DB;display:flex;align-items:center;justify-content:center;font-size:8px;color:transparent;flex-shrink:0}',
    '.ci.ok .cb{background:#10B981;border-color:#10B981;color:white}',
    '.phone{width:120px;margin:4px auto;background:#1F2937;border-radius:14px;padding:8px 6px 4px}',
    '.pi{font-size:8px;padding:2px 5px;margin-bottom:2px;background:#F3F4F6;border-radius:4px;border-left:3px solid #3B82F6}',
    '.deb{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:4px;text-align:center}',
    '.dm{background:#F9FAFB;border-radius:6px;padding:6px}', '.dn{font-size:16px;font-weight:900;color:#1E3A8A}', '.dl{font-size:8px;color:#6B7280;margin-top:2px}',
    '.fc{margin-bottom:4px}', '.fc2{display:flex;justify-content:center;gap:6px}',
    '.fcn{padding:4px 8px;border-radius:6px;border:2px solid;text-align:center;font-weight:600;font-size:9px}',
    '.fcn.s{border-color:#10B981;background:#D1FAE5}', '.fcn.d{border-color:#F59E0B;background:#FEF3C7}',
    '.fcn.f{border-color:#8B5CF6;background:#EDE9FE}', '.fcd{text-align:center;color:#9CA3AF;margin:1px 0;font-size:9px}',
    '.qz{margin-bottom:4px}', '.qq{font-size:10px;font-weight:500;margin-bottom:2px;color:#374151}',
    '.qo{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:2px}',
    '.qopt{padding:2px 8px;border-radius:12px;border:1px solid #E5E7EB;font-size:9px;color:#6B7280}',
    '.qopt.cor{background:#D1FAE5;border-color:#10B981;color:#065F46;font-weight:600}',
    '.qopt.wrg{background:#FEE2E2;border-color:#EF4444;color:#B91C1C;font-weight:600}',
    '.qopt.ans{background:#D1FAE5;border-color:#10B981;color:#065F46;font-weight:600}',
    '.rd{display:flex;gap:10px;justify-content:center;margin:4px 0}',
    '.ri{text-align:center;width:50px}', '.ro{height:70px;background:#F3F4F6;border-radius:4px;position:relative;overflow:hidden;margin:0 auto 3px;width:30px}',
    '.rb{position:absolute;bottom:0;left:0;right:0;border-radius:4px}', '.rl{font-size:8px;color:#4B5563;font-weight:600}', '.rs{font-size:10px;font-weight:700}',
    '.ws-ft{margin-top:10px;padding:6px 18px;border-top:1px solid #E5E7EB;font-size:8px;color:#9CA3AF;display:flex;justify-content:space-between}',
    '@page{size:A4;margin:0}'
  ].join('');
}
