/* ========== Worksheet PDF Generator (jsPDF + html2canvas) ========== */

function printWorksheet() {
  var D = getWorksheetData();
  var name = getStudentName() || '同學';
  var now = new Date();
  var dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
  var progress = JSON.parse(localStorage.getItem('ct_workshop_progress') || '{}');
  var completed = Object.keys(progress).length;

  function g(k) { return D[k] || ''; }
  function gg(k) { var x = g(k); return x || '<span class="em">（未填寫）</span>'; }
  function mh(title, ct, color) { return '<div class="wm"><div class="wh" style="background:' + color + '"><span class="tag">' + title + '</span><span class="ct-tag">' + ct + '</span></div><div class="wb">'; }

  // Build worksheet HTML (same as template)
  var h = '<div class="ws-hd"><div><h1>🔍 解碼圖書館熱力圖</h1><div class="sub">計算思維自學工坊 — 學習工作單</div></div><div class="meta">' + name + ' | ' + dateStr + '<br>完成 ' + completed + ' / 6 模組</div></div><div class="ws-body">';

  // Module 1
  h += mh('模組 1 — 痛點挖掘', '問題定義', '#EF4444');
  h += '<div class="lbl">📊 投票：你去圖書館時遇到過幾次沒座位？</div><div class="vote-row">';
  ['0 次', '1-3 次', '4-6 次', '7 次以上'].forEach(function(o) { h += '<span class="vt' + (o === g('m1_vote') ? ' sel' : '') + '">' + o + '</span>'; });
  h += '</div><div class="lbl">💭 思考泡泡</div><div class="txt">' + gg('m1_thought') + '</div>';
  var sa = g('m1_sort'); h += '<div class="lbl">📋 問題排序</div>';
  if (sa && sa.length) { h += '<div class="sort">'; sa.forEach(function(s, i) { h += '<div class="si"><div class="sn">' + (i + 1) + '</div>' + s + '</div>'; }); h += '</div>'; }
  else { h += '<div class="txt em">（未完成排序）</div>'; }
  h += '</div></div>';

  // Module 2
  h += mh('模組 2 — 解構問題', '分解', '#F59E0B');
  var fa = g('m2_flow'); h += '<div class="lbl">🔄 數據流排序</div>';
  if (fa && fa.length) { h += '<div class="flow">'; fa.filter(Boolean).forEach(function(s, i) { if (i > 0) h += '<span class="fw">→</span>'; h += '<span class="fs">' + s + '</span>'; }); h += '</div>'; }
  else { h += '<div class="txt em">（未完成）</div>'; }
  h += '<div class="lbl">📦 卡片分類</div><div class="txt">' + gg('m2_classify') + '</div>';
  h += '</div></div>';

  // Module 3
  h += mh('模組 3 — 模式偵探', '模式識別', '#0EA5E9');
  var ma = g('m3_match'); h += '<div class="lbl">🔗 模式配對</div>';
  if (ma && ma.length) { ma.forEach(function(p) { h += '<div class="mr"><div class="ml">' + p.left + '</div><span class="mv">→</span><div class="mrr">' + p.right + '</div></div>'; }); }
  else { h += '<div class="txt em">（未完成配對）</div>'; }
  h += '<div class="lbl">⚠️ 異常數據判斷</div><div class="anomaly-wrap">' + gg('m3_anomaly') + '</div>';
  h += '<div class="lbl">🔮 雨天預測</div><div class="txt">' + gg('m3_predict') + '</div>';
  h += '</div></div>';

  // Module 4
  h += mh('模組 4 — 視覺化設計師', '抽象', '#EC4899');
  var cl = g('m4_checklist'); h += '<div class="lbl">✅ 設計檢查清單</div>';
  if (cl && cl.length) { cl.forEach(function(x) { h += '<div class="ci' + (x.checked ? ' ok' : '') + '"><div class="cb">✓</div><span>' + x.text + '</span></div>'; }); }
  else { h += '<div class="txt em">（未完成檢查清單）</div>'; }
  var ds = g('m4_design'); h += '<div class="lbl">📱 手機原型設計</div>';
  if (ds && ds.length) { h += '<div class="phone-wrap">'; ds.forEach(function(id) { var lbl = id; var compNames = { total: '📊 總人數卡片', floor: '🚦 樓層擁擠度', suggest: '💡 建議時段', heatmap: '🗺️ 熱力圖', trend: '📈 趨勢折線圖', notify: '🔔 通知設定', history: '📋 歷史記錄' }; if (compNames[id]) lbl = compNames[id]; h += '<div class="pi">' + lbl + '</div>'; }); h += '</div>'; }
  else { h += '<div class="txt em">（未設計）</div>'; }
  h += '<div class="lbl">💬 抽象反思</div><div class="txt">' + gg('m4_reflect') + '</div>';
  h += '</div></div>';

  // Module 5
  h += mh('模組 5 — 算法工程師', '算法設計', '#8B5CF6');
  var dr = g('m5_debounce_result'); h += '<div class="lbl">⏱ 去抖測試：<b>' + gg('m5_debounce') + '</b></div>';
  if (dr && dr.total) { var ac = dr.acc >= 90 ? '#10B981' : dr.acc >= 75 ? '#F59E0B' : '#EF4444'; h += '<div class="deb"><div class="dm"><div class="dn">' + dr.total + '</div><div class="dl">總人數</div></div><div class="dm"><div class="dn" style="color:#F59E0B">' + dr.fp + '</div><div class="dl">誤報</div></div><div class="dm"><div class="dn" style="color:#10B981">' + dr.missed + '</div><div class="dl">漏計</div></div><div class="dm"><div class="dn" style="color:' + ac + '">' + dr.acc + '%</div><div class="dl">準確率</div></div></div>'; }
  else { h += '<div class="txt em">（未完成去抖測試）</div>'; }
  h += '<div class="lbl">🔀 流程圖填空</div><div class="fc">';
  h += '<span class="fn s">IR 感測器觸發</span><span class="fd">⬇</span>';
  h += '<span class="fn d">方向判定</span><span class="fd">⬇</span>';
  h += '<div class="fc2"><span class="fn f">enter_count += 1</span><span class="fn f">exit_count += 1</span></div><span class="fd">⬇</span>';
  h += '<span class="fn f">更新 current_count</span><span class="fd">⬇</span>';
  h += '<span class="fn f">邊界保護</span><span class="fd">⬇</span>';
  h += '<span class="fn f">去抖過濾</span></div>';
  h += '<div style="text-align:center;font-weight:700;margin-top:4px">' + gg('m5_flowchart') + '</div>';
  h += '</div></div>';

  // Module 6
  h += mh('模組 6 — 系統整合與反思', '整合', '#10B981');
  h += '<div class="lbl">🧠 概念測驗</div>';
  var qqs = ['1. 拆成三個模組屬於？', '2. 先遮A再遮B=進入屬於？', '3. 紅綠燈代替人數屬於？', '4. 每天10-12點是高峰屬於？'];
  var qos = [['A.模式識別', 'B.分解', 'C.抽象', 'D.算法設計'], ['A.分解', 'B.模式識別', 'C.抽象', 'D.算法設計'], ['A.算法設計', 'B.分解', 'C.抽象', 'D.模式識別'], ['A.抽象', 'B.算法設計', 'C.分解', 'D.模式識別']];
  var qd = g('m6_quiz_detail');
  for (var i = 0; i < 4; i++) {
    var clr = ''; if (qd && qd[i]) clr = qd[i].right ? ' cor' : ' wrg';
    h += '<div class="qq' + clr + '"><div class="qq-t">' + qqs[i] + '</div><div class="qos">';
    qos[i].forEach(function(o, j) {
      var c = ''; if (qd && qd[i]) { if (qd[i].chosen === String.fromCharCode(65 + j)) c = qd[i].right ? ' ca' : ' wa'; else if (qd[i].correct === String.fromCharCode(65 + j)) c = ' ca'; }
      h += '<span class="qo' + c + '">' + o + '</span>';
    });
    h += '</div></div>';
  }
  h += '<div style="text-align:center;font-size:15px;font-weight:900;color:#F59E0B;margin:10px 0">得分：' + gg('m6_quiz') + '</div>';
  h += '<div class="lbl">📊 能力自評</div><canvas id="rCanvas" width="200" height="200" class="rcv"></canvas>';
  h += '<div class="lbl">💬 反思</div><div class="txt">' + gg('m6_reflect1') + '</div><div class="txt">' + gg('m6_reflect2') + '</div><div class="txt">' + gg('m6_reflect3') + '</div>';
  h += '</div></div>';
  h += '</div><div class="ws-ft">解碼圖書館熱力圖 — 計算思維自學工坊<span>系統自動生成</span></div>';

  // Full document with inline styles
  var fullHtml = '<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8">' +
    '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">' +
    '<style>' + getStyles() + '</style></head><body><div class="ws">' + h + '</div></body></html>';

  // Create hidden container
  var container = document.createElement('div');
  container.id = 'pdfRender';
  container.style.cssText = 'position:fixed;top:0;left:0;width:794px;z-index:-1;opacity:0;pointer-events:none;';
  container.innerHTML = fullHtml;
  document.body.appendChild(container);

  // Draw radar canvas
  setTimeout(function() {
    var cv = document.getElementById('rCanvas');
    if (cv) {
      var ctx = cv.getContext('2d');
      var rd = g('m6_radar');
      var rl = ['分解', '模式識別', '抽象', '算法設計'];
      var vals = rd && rd[rl[0]] ? [parseInt(rd[rl[0]]) || 5, parseInt(rd[rl[1]]) || 5, parseInt(rd[rl[2]]) || 5, parseInt(rd[rl[3]]) || 5] : [5, 5, 5, 5];
      var w = 200, hw = 200, cx = w / 2, cy = hw / 2, r = 80;
      for (var lv = 1; lv <= 5; lv++) {
        var lr = (lv / 5) * r; ctx.beginPath();
        for (var i = 0; i < 4; i++) { var a = (Math.PI * 2 * i / 4) - Math.PI / 2; var x = cx + lr * Math.cos(a), y = cy + lr * Math.sin(a); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
        ctx.closePath(); ctx.strokeStyle = '#E5E7EB'; ctx.stroke();
      }
      for (var i = 0; i < 4; i++) {
        var a = (Math.PI * 2 * i / 4) - Math.PI / 2; ctx.beginPath(); ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a)); ctx.strokeStyle = '#D1D5DB'; ctx.stroke();
        var lx = cx + (r + 22) * Math.cos(a), ly = cy + (r + 22) * Math.sin(a);
        ctx.fillStyle = '#6B7280'; ctx.font = '11px Noto Sans TC'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(rl[i], lx, ly);
      }
      ctx.beginPath();
      for (var i = 0; i < 4; i++) { var a = (Math.PI * 2 * i / 4) - Math.PI / 2; var val = vals[i] / 10; var x = cx + r * val * Math.cos(a), y = cy + r * val * Math.sin(a); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
      ctx.closePath(); ctx.fillStyle = 'rgba(59,130,246,0.25)'; ctx.fill(); ctx.strokeStyle = '#3B82F6'; ctx.lineWidth = 2; ctx.stroke();
      for (var i = 0; i < 4; i++) { var a = (Math.PI * 2 * i / 4) - Math.PI / 2; var val = vals[i] / 10; ctx.beginPath(); ctx.arc(cx + r * val * Math.cos(a), cy + r * val * Math.sin(a), 4, 0, Math.PI * 2); ctx.fillStyle = '#3B82F6'; ctx.fill(); }
    }

    // html2canvas
    setTimeout(function() {
      html2canvas(container, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        var pageW = 210;
        var imgW = pageW;
        var imgH = (canvas.height * pageW) / canvas.width;
        var pos = 0;

        // Add image, splitting across pages if needed
        while (imgH > 0) {
          pdf.addImage(imgData, 'PNG', 0, pos, imgW, imgH);
          imgH -= 297;
          pos -= 297;
          if (imgH > 0) pdf.addPage();
        }

        pdf.save('CT工作單_' + name + '_' + dateStr.replace(/\//g, '-') + '.pdf');
        document.getElementById('pdfRender').remove();
        showToast('📄 工作單 PDF 已下載！', 'success');
      }).catch(function() {
        document.getElementById('pdfRender').remove();
        showToast('生成失敗，請再試一次', 'error');
      });
    }, 300);
  }, 300);
}

function getStyles() {
  return [
    ':root{--deep-blue:#1E3A8A;--mid-blue:#3B82F6;--success-green:#10B981;--warning-orange:#F59E0B;--danger-red:#EF4444}',
    '*{margin:0;padding:0;box-sizing:border-box}', 'body{font-family:"Noto Sans TC",sans-serif;background:white}',
    '.ws{width:794px;background:white;margin:0 auto}',
    '.ws-hd{background:linear-gradient(135deg,#1E3A8A,#3B82F6);padding:16px 20px;color:white;display:flex;justify-content:space-between;align-items:center}',
    '.ws-hd h1{font-size:20px;font-weight:900}', '.sub{font-size:11px;opacity:.8}',
    '.meta{font-size:11px;text-align:right;background:rgba(255,255,255,.12);padding:4px 10px;border-radius:6px;line-height:1.6}',
    '.ws-body{padding:14px 18px}',
    '.wm{margin-bottom:12px;page-break-inside:avoid;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden}',
    '.wh{display:flex;align-items:center;gap:6px;padding:8px 12px;color:white;font-weight:700;font-size:12px}',
    '.tag{font-size:9px;background:rgba(255,255,255,.2);padding:2px 6px;border-radius:8px}',
    '.ct-tag{margin-left:auto;font-size:9px;background:rgba(0,0,0,.12);padding:2px 6px;border-radius:8px}',
    '.wb{padding:10px 12px}', '.lbl{font-size:11px;color:#1E3A8A;font-weight:600;margin:6px 0 3px}',
    '.lbl:first-child{margin-top:2px}', '.txt{font-size:12px;color:#374151;line-height:1.6;padding:8px 10px;background:#F9FAFB;border-radius:6px;margin-bottom:6px;white-space:pre-wrap}',
    '.txt.em{color:#D1D5DB;font-style:italic}',
    '.vote-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}',
    '.vt{padding:8px 20px;border:2px solid #E5E7EB;border-radius:24px;font-size:13px;color:#6B7280}',
    '.vt.sel{border-color:#EF4444;background:#FEF2F2;color:#B91C1C;font-weight:700}',
    '.sort{border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;margin-bottom:8px}',
    '.si{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #F3F4F6;font-size:13px;background:white}.si:last-child{border-bottom:none}',
    '.sn{width:24px;height:24px;border-radius:50%;background:#1E3A8A;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}',
    '.flow{display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:8px}',
    '.fs{padding:8px 12px;border:2px solid #3B82F6;border-radius:10px;font-size:11px;background:#DBEAFE;color:#1E3A8A;font-weight:600}',
    '.fw{color:#9CA3AF;font-size:12px;flex-shrink:0}',
    '.mr{display:flex;align-items:center;gap:8px;margin-bottom:6px}.ml,.mrr{padding:8px 12px;border:2px solid;border-radius:8px;font-size:12px;flex:1}',
    '.ml{text-align:right;background:#DBEAFE;border-color:#BFDBFE}.mrr{background:#FDF2F8;border-color:#FBCFE8}',
    '.mv{color:#0EA5E9;font-weight:700;flex-shrink:0}',
    '.anomaly-wrap{padding:8px 12px;background:#FEF3C7;border-radius:8px;font-size:12px;font-weight:600;color:#78350F;margin-bottom:6px}',
    '.ci{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#F8FAFC;border-radius:8px;margin-bottom:4px;font-size:12px}',
    '.ci.ok{background:#D1FAE5}', '.cb{width:20px;height:20px;border:2px solid #D1D5DB;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:transparent}',
    '.ci.ok .cb{background:#10B981;border-color:#10B981;color:white}',
    '.phone-wrap{max-width:160px;margin:4px auto;padding:8px 6px 4px}',
    '.pi{padding:4px 6px;margin-bottom:2px;background:#F3F4F6;border-radius:6px;border-left:3px solid #3B82F6;font-size:10px}',
    '.deb{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;margin-bottom:6px}',
    '.dm{padding:8px;background:#F9FAFB;border-radius:6px}', '.dn{font-size:16px;font-weight:900;color:#1E3A8A}', '.dl{font-size:8px;color:#6B7280;margin-top:2px}',
    '.fc{display:flex;flex-direction:column;align-items:center;gap:2px;margin-bottom:6px}',
    '.fn{display:inline-block;padding:5px 12px;border-radius:8px;border:2px solid;font-weight:600;font-size:10px;text-align:center}',
    '.fn.s{border-color:#10B981;background:#D1FAE5}', '.fn.d{border-color:#F59E0B;background:#FEF3C7}', '.fn.f{border-color:#8B5CF6;background:#EDE9FE}',
    '.fd{color:#9CA3AF;font-size:12px}', '.fc2{display:flex;justify-content:center;gap:12px}',
    '.qq{padding:10px 14px;border:2px solid #E5E7EB;border-radius:8px;margin-bottom:8px}',
    '.qq.cor{border-color:#10B981;background:#F0FDF4}', '.qq.wrg{border-color:#EF4444;background:#FEF2F2}',
    '.qq-t{font-size:12px;font-weight:600;margin-bottom:4px}', '.qos{display:flex;flex-direction:column;gap:4px}',
    '.qo{padding:6px 12px;border:2px solid #E5E7EB;border-radius:8px;font-size:12px}',
    '.qo.ca{border-color:#10B981;background:#D1FAE5}', '.qo.wa{border-color:#EF4444;background:#FEE2E2}',
    '.rcv{display:block;margin:4px auto}',
    '.ws-ft{margin-top:8px;padding:6px 16px;border-top:1px solid #E5E7EB;font-size:8px;color:#9CA3AF;display:flex;justify-content:space-between}'
  ].join('');
}
