document.addEventListener("DOMContentLoaded", function () {

  const body = document.querySelector('body');
  const html = document.querySelector('html');

  // Modal
  const openModalBtns = document.querySelectorAll('[data-popup]');
  const modals = document.querySelectorAll('.modal');

  openModalBtns.forEach((btn) => {

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const modal = document.getElementById(btn.dataset.popup);

      if (!modal) {
        return;
      }

      openModal(modal);

    });

  });

  modals.forEach((modal) => {

    const modalContent = modal.querySelector('.modal__content');
    const closeBtn = modal.querySelector('.modal__close');

    modal.addEventListener('click', () => {
      closeModal(modal);
    });

    closeBtn.addEventListener('click', () => {
      closeModal(modal);
    });

    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  })

  function openModal (modal) {
    modal.classList.add('active');
    body.classList.add('fixed');
  }

  function closeModal (modal) {
    switchClass(modal, 'active', 'close');

    setTimeout(() => {
      modal.classList.remove('close');
      body.classList.remove('fixed');
    }, 300);
  }

  // Switch theme
  const themeSwitchers = document.querySelectorAll('[data-theme]');

  themeSwitchers.forEach((switcher) => {
    switcher.addEventListener('click', (e) => {
      const theme = switcher.dataset.theme;

      html.setAttribute('theme', theme);
      localStorage.setItem('theme', theme);
    });
  });

  function switchClass(el = document.querySelector('body'), from = "open", to = "close") {
    const body = document.querySelector("body");

    el.classList.remove(from);
    body.offsetHeight = body.offsetHeight;
    el.classList.add(to);
  }

});
