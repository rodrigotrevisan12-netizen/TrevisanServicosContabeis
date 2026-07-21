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

  // formulário de contato — envio via Netlify Forms (AJAX, sem sair da página)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('.form-msg');
      var data = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
        .then(function () {
          form.reset();
          if (msg) {
            msg.textContent = 'Mensagem enviada com sucesso! Vamos retornar em breve.';
            msg.style.color = 'var(--blue)';
            msg.style.display = 'block';
          }
        })
        .catch(function () {
          if (msg) {
            msg.textContent = 'Não foi possível enviar agora. Tente novamente ou fale por telefone/e-mail.';
            msg.style.color = '#B3261E';
            msg.style.display = 'block';
          }
        });
    });
  }
});
