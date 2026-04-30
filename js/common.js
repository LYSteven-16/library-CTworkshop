/* ========== Common JS Utilities ========== */

// Toast notification
function showToast(msg, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  const iconMap = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
  toast.innerHTML = '<i class="fas fa-' + (iconMap[type] || 'info-circle') + '"></i> ' + msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Confetti effect
function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  const colors = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-10px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1 + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 3000);
}

// Knowledge card overlay
function showKnowledge(title, content) {
  document.getElementById('knowledgeTitle').textContent = title;
  document.getElementById('knowledgeContent').textContent = content;
  document.getElementById('knowledgeOverlay').classList.add('show');
}
function closeKnowledge() {
  document.getElementById('knowledgeOverlay').classList.remove('show');
}

// Checklist toggle
function toggleCheck(el) {
  el.classList.toggle('checked');
  const icon = el.querySelector('.check-box i');
  icon.style.display = el.classList.contains('checked') ? 'block' : 'none';
}

// Get student name from localStorage
function getStudentName() {
  return localStorage.getItem('ct_workshop_name') || '';
}

// Save student name
function saveStudentName(name) {
  localStorage.setItem('ct_workshop_name', name);
}

// Check progress from localStorage
function updateProgress() {
  var progress = JSON.parse(localStorage.getItem('ct_workshop_progress') || '{}');
  for (var i = 1; i <= 6; i++) {
    var el = document.getElementById('prog-' + i);
    if (el && progress['module' + i]) {
      el.classList.add('done');
    }
  }
}

// Mark a module as complete
function markComplete(moduleNum) {
  var progress = JSON.parse(localStorage.getItem('ct_workshop_progress') || '{}');
  progress['module' + moduleNum] = true;
  localStorage.setItem('ct_workshop_progress', JSON.stringify(progress));
}
