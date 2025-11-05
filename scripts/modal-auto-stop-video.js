document.addEventListener('click', e => {
  if (e.target.matches('.modal-close, .modal-back')) {
    const modal = e.target.closest('.modal');
    modal?.querySelectorAll('iframe.modal-video').forEach(frame => {
      if (!frame.dataset.src) frame.dataset.src = frame.src;
      frame.src = '';
    });
  }
  if (e.target.matches('a[href^="#modal-"]')) {
    setTimeout(() => {
      const hash = location.hash;
      const modal = document.querySelector(hash);
      modal?.querySelectorAll('iframe.modal-video').forEach(frame => {
        if (frame.dataset.src && frame.src !== frame.dataset.src)
          frame.src = frame.dataset.src;
      });
    }, 150);
  }
});