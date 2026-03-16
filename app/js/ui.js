// ── SVG Icon Library (inline Lucide icons) ──
const icons = {
  'layout-dashboard': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>',
  'star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  'clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'settings': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  'log-out': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  'clipboard-list': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
  'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  'heart': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  'calendar': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
  'plus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  'home': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'ticket': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
};

export function icon(name, size = 20) {
  const svg = icons[name];
  if (!svg) return '';
  return `<span class="icon" style="width:${size}px;height:${size}px;display:inline-flex;align-items:center;justify-content:center">${svg}</span>`;
}

// ── Toast Notifications ──
export function showToast(message, type = 'success') {
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'opacity .25s, transform .25s';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// ── Loading Overlay ──
export function showLoading(container) {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = '<div class="loading-spinner"></div>';
  overlay.style.cssText = `
    position:absolute;top:0;left:0;width:100%;height:100%;
    background:rgba(8,5,12,.85);backdrop-filter:blur(4px);
    display:flex;align-items:center;justify-content:center;
    z-index:50;border-radius:inherit;
  `;
  const spinner = overlay.querySelector('.loading-spinner');
  spinner.style.cssText = `
    width:32px;height:32px;border:2px solid rgba(255,255,255,.06);
    border-top-color:var(--rose);border-radius:50%;
    animation:spin .7s linear infinite;
  `;
  if (!document.getElementById('spin-style')) {
    const style = document.createElement('style');
    style.id = 'spin-style';
    style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
  }
  container.style.position = 'relative';
  container.appendChild(overlay);
  return overlay;
}

export function hideLoading(overlay) {
  if (overlay) overlay.remove();
}

// ── Confirm Modal ──
export function showConfirm(title, message, onConfirm) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay open';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      </div>
      <p style="color:var(--text-soft);font-size:.88rem;line-height:1.7">${message}</p>
      <div class="modal-actions">
        <button class="btn-ghost btn-small cancel-btn">Cancel</button>
        <button class="btn-danger confirm-btn">Confirm</button>
      </div>
    </div>
  `;
  overlay.querySelector('.cancel-btn').onclick = () => overlay.remove();
  overlay.querySelector('.confirm-btn').onclick = () => {
    overlay.remove();
    onConfirm();
  };
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);
}

// ── Format Date ──
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// ── Format Time ──
export function formatTime(timeStr) {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const h12 = hour % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

// ── Get Initials ──
export function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// ── Animated Counter ──
export function animateCounter(el, target, duration = 600) {
  if (typeof target !== 'number' || isNaN(target)) {
    el.textContent = target;
    return;
  }
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (target - start) * ease);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ── Cursor Glow on Cards ──
export function initCursorGlow(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

// ── Render Sidebar ──
export function renderSidebar(activePage, user) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const pages = [
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard', href: './dashboard.html' },
    { id: 'request', icon: 'sparkles', label: 'Request a Plan', href: './request.html' },
    { id: 'events', icon: 'ticket', label: 'Events', href: './events.html' },
    { id: 'favorites', icon: 'star', label: 'Favorites', href: './favorites.html' },
    { id: 'history', icon: 'clock', label: 'Date History', href: './history.html' },
    { id: 'settings', icon: 'settings', label: 'Settings', href: './settings.html' },
  ];

  const displayName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'User';
  const email = user?.email || '';

  sidebar.innerHTML = `
    <div class="sidebar-logo">DateFlo</div>
    <nav class="sidebar-nav">
      ${pages.map(p => `
        <a href="${p.href}" class="nav-item ${p.id === activePage ? 'active' : ''}">
          <span class="nav-icon">${icon(p.icon, 18)}</span>
          <span class="nav-label">${p.label}</span>
        </a>
      `).join('')}
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="sidebar-avatar">${getInitials(displayName)}</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">${displayName}</div>
          <div class="sidebar-user-email">${email}</div>
        </div>
      </div>
      <button class="nav-signout" id="signOutBtn">
        <span class="nav-icon">${icon('log-out', 18)}</span>
        <span>Sign Out</span>
      </button>
    </div>
  `;
}

// ── Render Mobile Tabs ──
export function renderMobileTabs(activePage) {
  const tabs = document.getElementById('mobileTabs');
  if (!tabs) return;

  const items = [
    { id: 'dashboard', icon: 'home', label: 'Home', href: './dashboard.html' },
    { id: 'request', icon: 'sparkles', label: 'New Plan', href: './request.html' },
    { id: 'events', icon: 'ticket', label: 'Events', href: './events.html' },
    { id: 'settings', icon: 'settings', label: 'Settings', href: './settings.html' },
  ];

  tabs.innerHTML = `
    <div class="mobile-tabs-inner">
      ${items.map(i => `
        <a href="${i.href}" class="tab-item ${i.id === activePage ? 'active' : ''}">
          <span class="tab-icon">${icon(i.icon, 22)}</span>
          ${i.label}
        </a>
      `).join('')}
    </div>
  `;
}

// ── Status Badge HTML ──
export function statusBadge(status) {
  const map = {
    requested: { cls: 'badge-requested', label: 'Requested' },
    in_progress: { cls: 'badge-progress', label: 'In Progress' },
    delivered: { cls: 'badge-delivered', label: 'Delivered' },
    archived: { cls: 'badge-archived', label: 'Archived' },
  };
  const s = map[status] || map.requested;
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}
