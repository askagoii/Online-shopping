  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  // Add to bag
  let bagCount = 0;
  const bagCountEl = document.getElementById('bagCount');
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bagCount++;
      bagCountEl.textContent = bagCount;
      btn.textContent = 'Added';
      btn.classList.add('added');
      setTimeout(() => {
        btn.textContent = 'Add to bag';
        btn.classList.remove('added');
      }, 1400);
    });
  });

  // Newsletter form (demo only, no backend)
  const nlForm = document.getElementById('nlForm');
  const nlNote = document.getElementById('nlNote');
  nlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    nlNote.textContent = "You're on the list. Watch for the next field note.";
    nlForm.querySelector('input').value = '';
  });

// scroll buttons 
const grid = document.getElementById('productGrid');

document.getElementById('rightBtn').onclick = () => {
    grid.scrollBy({ left: 350, behavior: 'smooth' });
};

document.getElementById('leftBtn').onclick = () => {
    grid.scrollBy({ left: -350, behavior: 'smooth' });
};