// Pauses long-running decorative CSS animations (orbit spin, glow breathe,
// ticker marquee) while they're outside the viewport, so they don't burn
// CPU/battery off-screen. Elements opt in via [data-pause-offscreen].
const nodes = document.querySelectorAll<HTMLElement>('[data-pause-offscreen]');

if (nodes.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      }
    },
    { rootMargin: '140px 0px' },
  );

  nodes.forEach((node) => observer.observe(node));
}
