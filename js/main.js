// main.js – shows a still image by default and swaps in the GIF on hover/focus.

(function () {
  // Respect people who ask their device to reduce motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Touch screens have no hover: a tap should simply open the project page.
  const canHover = window.matchMedia('(hover: hover)').matches;

  document.querySelectorAll('.card img[data-gif]').forEach(function (img) {
    const still = img.getAttribute('src');
    const gif = img.dataset.gif;
    const card = img.closest('.card');
    let preloaded = false;

    function play() { img.src = gif; }    // browser restarts the GIF from frame 1
    function stop() { img.src = still; }

    // Start downloading the GIF the first time the person shows interest,
    // so the page itself loads fast even with many animations.
    function preload() {
      if (preloaded) return;
      preloaded = true;
      new Image().src = gif;
    }

    // Keyboard users get the animation too.
    card.addEventListener('focus', function () { preload(); play(); });
    card.addEventListener('blur', stop);

    if (canHover) {
      card.addEventListener('mouseenter', function () { preload(); play(); });
      card.addEventListener('mouseleave', stop);
    }
  });
})();