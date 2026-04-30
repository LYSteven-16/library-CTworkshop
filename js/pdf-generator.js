/* ========== PDF Worksheet Generator ========== */

function generateWorksheetPDF() {
  var data = getWorksheetData();
  var name = getStudentName() || '同學';
  var now = new Date();
  var dateStr = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();

  var doc = new jspdf.jsPDF('p', 'mm', 'a4');
  var pageW = 210;
  var margin = 15;
  var contentW = pageW - margin * 2;
  var y = margin;

  // Helper: add text with auto line-wrap and page break
  function addText(text, x, currentY, opts) {
    opts = opts || {};
    var fontSize = opts.fontSize || 11;
    var color = opts.color || [55, 65, 81];
    var fontStyle = opts.fontStyle || 'normal';
    var maxWidth = opts.maxWidth || contentW - (x - margin);

    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.setTextColor(color[0], color[1], color[2]);

    var lines = doc.splitTextToSize(text, maxWidth);
    var lineHeight = fontSize * 0.45;

    for (var i = 0; i < lines.length; i++) {
      if (currentY > 275) {
        doc.addPage();
        currentY = margin;
      }
      doc.text(lines[i], x, currentY);
      currentY += lineHeight;
    }
    return currentY;
  }

  function addSectionTitle(text, currentY) {
    if (currentY > 260) { doc.addPage(); currentY = margin; }
    doc.setFillColor(59, 130, 246);
    doc.roundedRect(margin, currentY, contentW, 8, 1, 1, 'F');
    currentY = addText(text, margin + 3, currentY + 5.5, {
      fontSize: 12, color: [255, 255, 255], fontStyle: 'bold', maxWidth: contentW - 6
    });
    return currentY + 3;
  }

  function addField(label, value, currentY) {
    if (!value) value = '（未填寫）';
    currentY = addText(label, margin + 2, currentY, {
      fontSize: 10, color: [30, 58, 138], fontStyle: 'bold', maxWidth: contentW - 4
    });
    currentY = addText(value, margin + 5, currentY + 1, {
      fontSize: 10, color: [75, 85, 99], maxWidth: contentW - 10
    });
    return currentY + 2;
  }

  // ===== Header =====
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, pageW, 35, 'F');

  y = addText('解碼圖書館熱力圖', margin, 13, {
    fontSize: 20, color: [255, 255, 255], fontStyle: 'bold'
  });
  y = addText('計算思維自學工坊 — 學習工作單', margin, 22, {
    fontSize: 12, color: [191, 219, 254]
  });

  // Student info bar
  doc.setFillColor(238, 242, 255);
  doc.roundedRect(margin, 40, contentW, 12, 2, 2, 'F');
  doc.setFontSize(11);
  doc.setTextColor(30, 58, 138);
  doc.text('姓名：' + name, margin + 4, 47);
  doc.text('日期：' + dateStr, margin + contentW / 2, 47);

  y = 58;

  // ===== Module 1 =====
  y = addSectionTitle('模組 1：痛點挖掘 — 問題定義', y);
  y = addField('你去圖書館時遇到過幾次沒座位？', data.m1_vote, y);
  y = addField('思考泡泡：你的想法', data.m1_thought, y);
  var sortArr = data.m1_sort;
  var sortStr = sortArr && sortArr.length ? sortArr.map(function(s, i) { return (i+1) + '. ' + s; }).join(' → ') : '';
  y = addField('問題排序（按重要性）', sortStr, y);

  // ===== Module 2 =====
  y = addSectionTitle('模組 2：解構問題 — 分解', y);
  var flowArr = data.m2_flow;
  var flowStr = flowArr && flowArr.length ? flowArr.filter(function(s){return s}).join(' → ') : '';
  y = addField('數據流排序', flowStr, y);

  // ===== Module 3 =====
  y = addSectionTitle('模組 3：模式偵探 — 模式識別', y);
  y = addField('異常數據選擇', data.m3_anomaly, y);
  y = addField('雨天預測', data.m3_predict, y);

  // ===== Module 4 =====
  y = addSectionTitle('模組 4：視覺化設計師 — 抽象', y);
  var designArr = data.m4_design;
  var designStr = designArr && designArr.length ? designArr.join('、') : '';
  y = addField('手機原型設計（選擇的組件）', designStr, y);
  y = addField('抽象反思', data.m4_reflect, y);

  // ===== Module 5 =====
  y = addSectionTitle('模組 5：算法工程師 — 算法設計', y);
  y = addField('去抖窗口設定', data.m5_debounce, y);
  y = addField('流程圖填空', data.m5_flowchart, y);

  // ===== Module 6 =====
  y = addSectionTitle('模組 6：系統整合與反思', y);
  y = addField('概念測驗得分', data.m6_quiz, y);
  var radar = data.m6_radar;
  var radarStr = '';
  if (radar && typeof radar === 'object') {
    radarStr = Object.keys(radar).map(function(k) { return k + '：' + radar[k] + '/10'; }).join('、');
  }
  y = addField('自評雷達圖', radarStr, y);
  y = addField('反思 1：以前以為…現在知道…', data.m6_reflect1, y);
  y = addField('反思 2：卡住了…通過…解決了', data.m6_reflect2, y);
  y = addField('反思 3：最厲害的一招', data.m6_reflect3, y);

  // ===== Footer =====
  if (y > 265) { doc.addPage(); y = margin; }
  doc.setDrawColor(209, 213, 219);
  doc.line(margin, y + 2, pageW - margin, y + 2);
  y += 6;
  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text('解碼圖書館熱力圖 — 計算思維自學工坊 | 由系統自動生成', margin, y);
  doc.text('第 ' + doc.getNumberOfPages() + ' 頁', pageW - margin - 15, y);

  // Save
  var filename = 'CT工作單_' + name + '_' + dateStr.replace(/\//g, '-') + '.pdf';
  doc.save(filename);
  showToast('📄 工作單已生成並下載！', 'success');
}
