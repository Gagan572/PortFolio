document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // --- Theme Toggle Handler ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Set default theme to Dark (or load from localStorage)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.contains('light');
    
    if (isLight) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeToggleDarkIcon.classList.add('hidden');
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      themeToggleDarkIcon.classList.remove('hidden');
      themeToggleLightIcon.classList.add('hidden');
    }
  });

  // --- Sticky Nav and Scroll Spying ---
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    // Add border and background to navbar on scroll
    if (window.scrollY > 50) {
      header.classList.add('backdrop-blur-md', 'bg-slate-950/80', 'border-b', 'border-slate-800');
      // For light mode
      if (document.documentElement.classList.contains('light')) {
        header.classList.add('bg-white/80', 'border-slate-200');
      }
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-slate-950/80', 'border-b', 'border-slate-800', 'bg-white/80', 'border-slate-200');
    }

    // Scroll spy active nav highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-teal-400', 'dark:text-teal-400', 'text-teal-600', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        if (document.documentElement.classList.contains('light')) {
          link.classList.add('text-teal-600', 'font-semibold');
        } else {
          link.classList.add('text-teal-400', 'font-semibold');
        }
      }
    });
  });

  // --- Skill Badges Interactive Filter ---
  const skillFilters = document.querySelectorAll('.skill-filter');
  const skillGroups = document.querySelectorAll('.skill-group');

  skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      skillFilters.forEach(f => f.classList.remove('bg-teal-500', 'text-white', 'dark:bg-teal-500', 'bg-slate-200', 'text-slate-700'));
      // Active state styling
      filter.classList.add('bg-teal-500', 'text-white');
      
      const targetCategory = filter.getAttribute('data-filter');
      
      skillGroups.forEach(group => {
        if (targetCategory === 'all' || group.getAttribute('data-category') === targetCategory) {
          group.style.display = 'block';
          group.classList.add('animate-fade-in');
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // --- Scan Safe simulated security terminal ---
  const terminalLogs = [
    { text: "gss@security-node:~$ ./scansafe --scan --target ./system_files", type: "cmd" },
    { text: "[INFO] Initializing Scan Safe Security Engine v2.4...", type: "info" },
    { text: "[INFO] Location verification: Bangalore Node connected.", type: "info" },
    { text: "[STATUS] Executing threat signatures comparison (4,812 rules)...", type: "status" },
    { text: "[STATUS] Auditing data streams for pattern matching...", type: "status" },
    { text: "[SUCCESS] Security core online. Dynamic rules loaded.", type: "success" },
    { text: "[AUDIT] Checking file integrity of db_adapter.py...", type: "status" },
    { text: "[SUCCESS] Integrity verified (SHA-256 hash matches local state).", type: "success" },
    { text: "[AUDIT] Analysing background network bindings...", type: "status" },
    { text: "[WARNING] Connection signature on Port 3306 (MySQL) requires ssl-mode.", type: "warning" },
    { text: "[SUCCESS] Heuristic sweep complete. Zero active threats found.", type: "success" },
    { text: "[INFO] Verification report generated successfully. System secure.", type: "info" }
  ];

  const terminalBody = document.getElementById('terminal-body');
  const runScanBtn = document.getElementById('run-scan-btn');
  let isScanning = false;

  function runThreatScan() {
    if (isScanning) return;
    isScanning = true;
    runScanBtn.disabled = true;
    runScanBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⚙️</span>Scanning...';
    
    // Clear terminal contents except first placeholder line
    terminalBody.innerHTML = '';
    
    let index = 0;
    
    function printNextLog() {
      if (index < terminalLogs.length) {
        const log = terminalLogs[index];
        const logLine = document.createElement('div');
        logLine.className = 'py-1 font-mono-tech text-xs leading-relaxed';
        
        switch(log.type) {
          case 'cmd':
            logLine.className += ' text-slate-300 dark:text-slate-100 font-semibold';
            break;
          case 'info':
            logLine.className += ' text-cyan-400';
            break;
          case 'status':
            logLine.className += ' text-slate-400';
            break;
          case 'warning':
            logLine.className += ' text-yellow-400 font-bold';
            break;
          case 'success':
            logLine.className += ' text-teal-400 font-semibold';
            break;
        }
        
        logLine.innerText = log.text;
        terminalBody.appendChild(logLine);
        
        // Auto-scroll to bottom of terminal
        terminalBody.scrollTop = terminalBody.scrollHeight;
        
        index++;
        setTimeout(printNextLog, Math.random() * 400 + 150); // random print speeds
      } else {
        isScanning = false;
        runScanBtn.disabled = false;
        runScanBtn.innerHTML = '<i data-lucide="shield" class="w-4 h-4 mr-2"></i>Trigger Threat Scan';
        lucide.createIcons(); // reload icons for button
      }
    }
    
    printNextLog();
  }

  if (runScanBtn) {
    runScanBtn.addEventListener('click', runThreatScan);
    // Auto-run first scan for high visual engagement
    setTimeout(runThreatScan, 1500);
  }

  // --- Resume Modal Actions ---
  const resumeBtn = document.getElementById('resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const closeResumeModal = document.getElementById('close-resume');
  const printResumeBtn = document.getElementById('print-resume');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('hidden');
      resumeModal.classList.add('flex');
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    });

    closeResumeModal.addEventListener('click', () => {
      resumeModal.classList.add('hidden');
      resumeModal.classList.remove('flex');
      document.body.style.overflow = '';
    });

    // Close when clicking outside of modal content
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.add('hidden');
        resumeModal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });

    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
