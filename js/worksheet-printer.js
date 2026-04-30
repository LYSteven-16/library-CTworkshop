/* ========== Worksheet Printer ========== */
/* Opens worksheet-template.html in new window → auto-print → one-page fit */

function printWorksheet() {
  // Ensure data is saved before opening
  var w = window.open('worksheet-template.html', '_blank', 'width=900,height=700');
  if (!w) {
    // Popup blocked — fallback: navigate directly
    window.location.href = 'worksheet-template.html?print=1';
  }
}
