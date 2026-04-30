/* ========== Worksheet Printer ========== */
/* Opens worksheet-template.html in new window → auto-print → PDF page fits content */

function printWorksheet() {
  var w = window.open('worksheet-template.html?print=1', '_blank', 'width=900,height=700');
  if (!w) {
    window.location.href = 'worksheet-template.html?print=1';
  }
}
