

  const slides = document.querySelectorAll('.slide');
  const dotsEl = document.querySelectorAll('.dot');
  let current = 0, timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsEl[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsEl[current].classList.add('active');
    document.getElementById('slides').style.transform = `translateX(-${current * (100/3)}%)`;
  }

  function autoPlay() { timer = setInterval(() => goTo(current + 1), 5500); }
  function resetTimer() { clearInterval(timer); autoPlay(); }

  document.getElementById('next').addEventListener('click', () => { goTo(current + 1); resetTimer(); });
  document.getElementById('prev').addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  dotsEl.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); resetTimer(); }));

  autoPlay();
