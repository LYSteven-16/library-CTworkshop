/* ========== Worksheet Printer ========== */
/* Uses browser's native print → Save as PDF workflow */
/* All styles match the actual module interactive elements */

function printWorksheet() {
  var D = getWorksheetData();
  var name = getStudentName() || '同學';
  var now = new Date();
  var dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
  var progress = JSON.parse(localStorage.getItem('ct_workshop_progress') || '{}');
  var completed = Object.keys(progress).length;

  function v(key) { return D[key] || ''; }
  function vv(key) { var x = v(key); return x || '（未填寫）'; }
  function modHead(title, ct, color) { return '<div class="wm"><div class="wh" style="background:'+color+'"><span class="tag">'+title+'</span><span class="ct-tag">'+ct+'</span></div><div class="wb">'; }

  var html = '<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="UTF-8">' +
    '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&display=swap" rel="stylesheet">' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">' +
    '<style>'+PS()+'</style></head><body><div class="ws">';

  // Header
  html += '<div class="ws-hd"><div><h1>🔍 解碼圖書館熱力圖</h1><div class="sub">計算思維自學工坊 — 學習工作單</div></div>' +
    '<div class="meta">'+name+' | '+dateStr+'<br>完成 '+completed+' / 6 模組</div></div>';

  // CT path
  var ctC = ['#EF4444','#F59E0B','#0EA5E9','#EC4899','#8B5CF6'];
  html += '<div class="ct-path">';
  for (var i=0;i<5;i++) { html+='<div class="dot" style="background:'+ctC[i]+'">'+(i+1)+'</div>'; if(i<4) html+='<div class="line"></div>'; }
  html += '</div><div class="ws-body">';

  // === Module 1 ===
  html += modHead('模組 1 — 痛點挖掘','問題定義','#EF4444');
  html += '<div class="lbl">📊 投票：你去圖書館時遇到過幾次沒座位？</div><div class="vote-options">';
  ['0 次','1-3 次','4-6 次','7 次以上'].forEach(function(o){ html+='<div class="vote-option'+(o===v('m1_vote')?' sel':'')+'">'+o+'</div>'; });
  html += '</div><div class="lbl">💭 思考泡泡</div><div class="txt">'+vv('m1_thought')+'</div>';
  var sa=v('m1_sort'); html+='<div class="lbl">📋 問題排序</div>';
  if(sa&&sa.length){html+='<div class="sort">';sa.forEach(function(s,i){html+='<div class="si"><div class="sn">'+(i+1)+'</div>'+s+'</div>'});html+='</div>'}
  else{html+='<div class="txt em">（未完成排序）</div>'}
  html += '</div></div>';

  // === Module 2 ===
  html += modHead('模組 2 — 解構問題','分解','#F59E0B');
  var fa=v('m2_flow');html+='<div class="lbl">🔄 數據流排序</div>';
  if(fa&&fa.length){html+='<div class="flow">';fa.filter(Boolean).forEach(function(s,i){if(i>0)html+='<span class="fw">→</span>';html+='<div class="fs">'+s+'</div>'});html+='</div>'}
  else{html+='<div class="txt em">（未完成）</div>'}
  html+='<div class="lbl">📦 卡片分類</div><div class="txt">'+vv('m2_classify')+'</div>';
  html += '</div></div>';

  // === Module 3 ===
  html += modHead('模組 3 — 模式偵探','模式識別','#0EA5E9');
  html+='<div class="lbl">🔗 模式配對</div>';
  var ma=v('m3_match');if(ma&&ma.length){ma.forEach(function(p){html+='<div class="mr"><div class="ml">'+p.left+'</div><span class="mv">→</span><div class="mrr">'+p.right+'</div></div>'})}else{html+='<div class="txt em">（未完成配對）</div>'}
  html+='<div class="lbl">⚠️ 異常數據判斷</div><div class="anomaly">'+vv('m3_anomaly')+'</div>';
  html+='<div class="lbl">🔮 雨天預測</div><div class="txt">'+vv('m3_predict')+'</div>';
  html += '</div></div>';

  // === Module 4 ===
  html += modHead('模組 4 — 視覺化設計師','抽象','#EC4899');
  html+='<div class="lbl">✅ 設計檢查清單</div>';
  var cl=v('m4_checklist');if(cl&&cl.length){cl.forEach(function(x){html+='<div class="ci'+(x.checked?' ok':'')+'"><div class="cb">✓</div><span>'+x.text+'</span></div>'})}else{html+='<div class="txt em">（未完成檢查清單）</div>'}
  var ds=v('m4_design');html+='<div class="lbl">📱 手機原型設計</div>';
  if(ds&&ds.length){html+='<div class="phone">';ds.forEach(function(s){html+='<div class="pi">'+s+'</div>'});html+='</div>'}
  else{html+='<div class="txt em">（未設計）</div>'}
  html+='<div class="lbl">💬 抽象反思</div><div class="txt">'+vv('m4_reflect')+'</div>';
  html += '</div></div>';

  // === Module 5 ===
  html += modHead('模組 5 — 算法工程師','算法設計','#8B5CF6');
  var dr=v('m5_debounce_result');html+='<div class="lbl">⏱ 去抖測試：<b>'+vv('m5_debounce')+'</b></div>';
  if(dr&&dr.total){var ac=dr.acc>=90?'#10B981':dr.acc>=75?'#F59E0B':'#EF4444';html+='<div class="deb"><div class="dm"><div class="dn">'+dr.total+'</div><div class="dl">總人數</div></div><div class="dm"><div class="dn" style="color:#F59E0B">'+dr.fp+'</div><div class="dl">誤報</div></div><div class="dm"><div class="dn" style="color:#10B981">'+dr.missed+'</div><div class="dl">漏計</div></div><div class="dm"><div class="dn" style="color:'+ac+'">'+dr.acc+'%</div><div class="dl">準確率</div></div></div>'}else{html+='<div class="txt em">（未完成去抖測試）</div>'}
  html+='<div class="lbl">🔀 流程圖填空</div><div class="fc">';
  html+='<span class="fn s">IR 感測器觸發</span><span class="fd">⬇</span>';
  html+='<span class="fn d">方向判定</span><span class="fd">⬇</span>';
  html+='<div class="fc2"><span class="fn f">enter_count += 1</span><span class="fn f">exit_count += 1</span></div><span class="fd">⬇</span>';
  html+='<span class="fn f">更新 current_count</span><span class="fd">⬇</span>';
  html+='<span class="fn f">邊界保護</span><span class="fd">⬇</span>';
  html+='<span class="fn f">去抖過濾</span></div>';
  html+='<div style="text-align:center;font-weight:700;margin-top:4px">'+vv('m5_flowchart')+'</div>';
  html += '</div></div>';

  // === Module 6 ===
  html += modHead('模組 6 — 系統整合與反思','整合','#10B981');
  html+='<div class="lbl">🧠 概念測驗</div>';
  var qq=['1. 拆成三個模組屬於？','2. 先遮A再遮B=進入屬於？','3. 紅綠燈代替人數屬於？','4. 每天10-12點是高峰屬於？'];
  var qo=[['A.模式識別','B.分解','C.抽象','D.算法設計'],['A.分解','B.模式識別','C.抽象','D.算法設計'],['A.算法設計','B.分解','C.抽象','D.模式識別'],['A.抽象','B.算法設計','C.分解','D.模式識別']];
  var qd=v('m6_quiz_detail');
  for(var i=0;i<4;i++){var clr='';if(qd&&qd[i])clr=qd[i].right?' cor':' wrg';
    html+='<div class="qq'+clr+'"><div class="qq-t">'+qq[i]+'</div><div class="qo">';
    qo[i].forEach(function(o,j){var c='';if(qd&&qd[i]){if(qd[i].chosen===String.fromCharCode(65+j))c=qd[i].right?' ca':' wa';else if(qd[i].correct===String.fromCharCode(65+j))c=' ca'}html+='<span class="qo-opt'+c+'">'+o+'</span>'});
    html+='</div></div>';
  }
  html+='<div style="text-align:center;font-size:15px;font-weight:900;color:#F59E0B">得分：'+vv('m6_quiz')+'</div>';
  html+='<div class="lbl">📊 能力自評</div>';
  var rd=v('m6_radar'),rl=['分解','模式識別','抽象','算法設計'],rc=['#F59E0B','#0EA5E9','#EC4899','#8B5CF6'];
  if(rd&&rd[rl[0]]){html+='<div class="rd">';rl.forEach(function(l,i){var s=rd[l]||5;html+='<div class="ri"><div class="ro"><div class="rb" style="height:'+(s*10)+'%;background:'+rc[i]+'"></div></div><div class="rl">'+l+'</div><div class="rs" style="color:'+rc[i]+'">'+s+'</div></div>'});html+='</div>'}
  else{html+='<div class="txt em">（未完成）</div>'}
  html+='<div class="lbl">💬 反思</div><div class="txt">'+vv('m6_reflect1')+'</div><div class="txt">'+vv('m6_reflect2')+'</div><div class="txt">'+vv('m6_reflect3')+'</div>';
  html += '</div></div>';

  html += '</div><div class="ws-ft">解碼圖書館熱力圖 — 計算思維自學工坊<span>系統自動生成</span></div></div></body></html>';

  // Create iframe and print
  var old = document.getElementById('wsPrintFrame'); if(old) old.remove();
  var iframe = document.createElement('iframe');
  iframe.id = 'wsPrintFrame';
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:99999;background:white;';
  document.body.appendChild(iframe);

  var doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open(); doc.write(html); doc.close();

  function doPrint() {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(function(){ var f=document.getElementById('wsPrintFrame'); if(f)f.remove(); }, 6000);
  }
  iframe.onload = doPrint;
  setTimeout(doPrint, 1200);
}

/* ===== Print Styles ===== */
function PS() {
  return [
    ':root{--deep-blue:#1E3A8A;--mid-blue:#3B82F6;--success-green:#10B981;--warning-orange:#F59E0B;--danger-red:#EF4444}',
    '*{margin:0;padding:0;box-sizing:border-box}','body{font-family:"Noto Sans TC",sans-serif;background:white;display:flex;justify-content:center}',
    '.ws{width:210mm;background:white}',
    '.ws-hd{background:linear-gradient(135deg,#1E3A8A,#3B82F6);padding:16px 20px;color:white;display:flex;justify-content:space-between;align-items:center}',
    '.ws-hd h1{font-size:20px;font-weight:900}','.sub{font-size:10px;opacity:.8}',
    '.meta{font-size:10px;text-align:right;background:rgba(255,255,255,.12);padding:4px 10px;border-radius:6px;line-height:1.6}',
    '.ct-path{display:flex;align-items:center;justify-content:center;padding:10px 0 6px;background:#F9FAFB;border-bottom:1px solid #E5E7EB}',
    '.dot{width:22px;height:22px;border-radius:50%;color:white;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;flex-shrink:0}',
    '.line{width:20px;height:2px;background:#D1D5DB;flex-shrink:0}',
    '.ws-body{padding:12px 16px}',
    '.wm{margin-bottom:10px;page-break-inside:avoid;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden}',
    '.wh{display:flex;align-items:center;gap:6px;padding:8px 12px;color:white;font-weight:700;font-size:12px}',
    '.tag{font-size:9px;background:rgba(255,255,255,.2);padding:2px 6px;border-radius:8px}',
    '.ct-tag{margin-left:auto;font-size:9px;background:rgba(0,0,0,.12);padding:2px 6px;border-radius:8px}',
    '.wb{padding:10px 12px}','.lbl{font-size:11px;color:#1E3A8A;font-weight:600;margin:6px 0 3px}',
    '.lbl:first-child{margin-top:2px}','.txt{font-size:12px;color:#374151;line-height:1.6;padding:8px 10px;background:#F9FAFB;border-radius:6px;margin-bottom:6px;white-space:pre-wrap}',
    '.txt.em{color:#D1D5DB;font-style:italic}',
    '.vote-options{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}',
    '.vote-option{padding:8px 20px;border:2px solid #E5E7EB;border-radius:24px;font-size:13px;color:#6B7280}',
    '.vote-option.sel{border-color:#EF4444;background:#FEF2F2;color:#B91C1C;font-weight:700}',
    '.sort{border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;margin-bottom:8px}',
    '.si{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #F3F4F6;font-size:13px;background:white}.si:last-child{border-bottom:none}',
    '.sn{width:24px;height:24px;border-radius:50%;background:#1E3A8A;color:white;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}',
    '.flow{display:flex;align-items:center;gap:4px;flex-wrap:wrap;margin-bottom:8px}',
    '.fs{padding:8px 12px;border:2px solid #3B82F6;border-radius:10px;font-size:11px;background:#DBEAFE;color:#1E3A8A;font-weight:600}',
    '.fw{color:#9CA3AF;font-size:12px;flex-shrink:0}',
    '.mr{display:flex;align-items:center;gap:8px;margin-bottom:6px}.ml,.mrr{padding:8px 12px;border:2px solid;border-radius:8px;font-size:12px;flex:1}',
    '.ml{text-align:right;background:#DBEAFE;border-color:#BFDBFE}.mrr{background:#FDF2F8;border-color:#FBCFE8}',
    '.mv{color:#0EA5E9;font-weight:700;flex-shrink:0}',
    '.anomaly{padding:8px 12px;background:#FEF3C7;border-radius:8px;font-size:12px;font-weight:600;color:#78350F;margin-bottom:6px}',
    '.ci{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#F8FAFC;border-radius:8px;margin-bottom:4px;font-size:12px}',
    '.ci.ok{background:#D1FAE5}','.cb{width:20px;height:20px;border:2px solid #D1D5DB;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:transparent}',
    '.ci.ok .cb{background:#10B981;border-color:#10B981;color:white}',
    '.phone{max-width:140px;margin:4px auto;background:#1F2937;border-radius:12px;padding:8px 6px 4px}',
    '.pi{padding:4px 6px;border-radius:6px;background:white;color:#1F2937;font-size:9px;margin-bottom:2px;border-left:3px solid #3B82F6}',
    '.deb{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;margin-bottom:6px}',
    '.dm{padding:8px;background:#F9FAFB;border-radius:6px}','.dn{font-size:16px;font-weight:900;color:#1E3A8A}','.dl{font-size:8px;color:#6B7280;margin-top:2px}',
    '.fc{display:flex;flex-direction:column;align-items:center;gap:2px;margin-bottom:6px}',
    '.fn{display:inline-block;padding:5px 12px;border-radius:8px;border:2px solid;font-weight:600;font-size:10px;text-align:center}',
    '.fn.s{border-color:#10B981;background:#D1FAE5}','.fn.d{border-color:#F59E0B;background:#FEF3C7}',
    '.fn.f{border-color:#8B5CF6;background:#EDE9FE}','.fd{color:#9CA3AF;font-size:12px}','.fc2{display:flex;justify-content:center;gap:12px}',
    '.qq{padding:10px 14px;border:2px solid #E5E7EB;border-radius:8px;margin-bottom:8px}',
    '.qq.cor{border-color:#10B981;background:#F0FDF4}','.qq.wrg{border-color:#EF4444;background:#FEF2F2}',
    '.qq-t{font-size:12px;font-weight:600;margin-bottom:4px}','.qo{display:flex;flex-direction:column;gap:4px}',
    '.qo-opt{padding:6px 12px;border:2px solid #E5E7EB;border-radius:8px;font-size:12px}',
    '.qo-opt.ca{border-color:#10B981;background:#D1FAE5}','.qo-opt.wa{border-color:#EF4444;background:#FEE2E2}',
    '.rd{display:flex;gap:14px;justify-content:center;margin:6px 0}','.ri{text-align:center;width:50px}',
    '.ro{height:70px;background:#F3F4F6;border-radius:6px;position:relative;overflow:hidden;margin:0 auto 3px;width:28px}',
    '.rb{position:absolute;bottom:0;left:0;right:0;border-radius:6px}','.rl{font-size:9px;color:#4B5563;font-weight:600}',
    '.rs{font-size:11px;font-weight:700}',
    '.ws-ft{margin-top:8px;padding:6px 16px;border-top:1px solid #E5E7EB;font-size:8px;color:#9CA3AF;display:flex;justify-content:space-between}',
    '@page{size:A4;margin:0}'
  ].join('');
}
