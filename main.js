document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // formulário de contato (demonstrativo — sem backend configurado)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('.form-msg');
      if (msg) {
        msg.textContent = 'Mensagem pronta! Configure um serviço de envio (ex: Formspree) ou o e-mail de destino para ativar o formulário.';
        msg.style.display = 'block';
      }
    });
  }
});
