'use strict';

 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // не відправляється  на сервер !!!

      const email = emailInput.value.trim();

      if (email === '') {
        alert('Будь ласка, введіть e-mail');
        return;
      }


      form.reset(); // очищення форми

      // --- Скролл до верху сторінки
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // --- Скидання автостилів автозаповнення (через зміну класу)
      setTimeout(() => {
        emailInput.classList.remove('autofilled');
      }, 500);
    });

    // Виявлення автозаповнення (хак через фокус і стилі)
    emailInput.addEventListener('animationstart', (e) => {
      if (e.animationName === 'onAutoFillStart') {
        emailInput.classList.add('autofilled');
      }
    });
  });
