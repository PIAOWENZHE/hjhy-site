// 移动端菜单展开/收起
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileBtn && mobileNav) {
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
}

// 顶部轮播
const slider = document.getElementById('heroSlider');
if (slider) {
  const slides = Array.from(slider.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');

  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  function next() {
    const nextIndex = (current + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prev() {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startAuto() {
    timer = setInterval(next, 5000);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    stopAuto(); next(); startAuto();
  });
  if (prevBtn) prevBtn.addEventListener('click', () => {
    stopAuto(); prev(); startAuto();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index || 0);
      stopAuto(); showSlide(index); startAuto();
    });
  });

  showSlide(0);
  startAuto();
}
