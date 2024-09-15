document
  .getElementById("contact-form2")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Objeto com as validações de cada campo
    const fields = [
      { id: "txtName2", message: "Por favor, preencha o campo Nome." },
      {
        id: "txtPhone2",
        message: "Por favor, preencha o campo Telefone.",
      },
      {
        id: "txtEmail2",
        message: "Por favor, preencha o campo Email corretamente.",
      },
    ];

    // Função para validação genérica
    function validateField(field) {
      const input = document.getElementById(field.id);
      const isValid = field.validation
        ? field.validation(input.value.trim())
        : input.value.trim() !== "";
      if (!isValid) {
        // SweetAlert2 para mostrar a mensagem de erro
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: field.message,
          confirmButtonColor: "#5172FE",
        });
        input.focus();
        return false;
      }
      return true;
    }

    // Iterar sobre os campos e validar
    for (const field of fields) {
      if (!validateField(field)) {
        return; // Parar a execução se um campo for inválido
      }
    }

    // Se todos os campos forem válidos, construir a URL do WhatsApp e abrir a janela
    var txtName = document.getElementById("txtName2").value;
    var txtPhone = document.getElementById("txtPhone2").value;
    var txtEmail = document.getElementById("txtEmail2").value;
    var urlSend =
      "https://wa.me/5541998572779?text=Nome:+*" +
      encodeURIComponent(txtName) + // Usar encodeURIComponent para evitar problemas com caracteres especiais
      "*%0ATelefone:+*" +
      encodeURIComponent(txtPhone) +
      "*%0AE-mail:+*" +
      encodeURIComponent(txtEmail);

    window.open(urlSend, "_blank");
  });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Objeto com as validações de cada campo
    const fields = [
      { id: "txtName", message: "Por favor, preencha o campo Nome." },
      {
        id: "txtPhone",
        message: "Por favor, preencha o campo Telefone.",
      },
      {
        id: "txtEmail",
        message: "Por favor, preencha o campo Email corretamente.",
      },
    ];

    // Função para validação genérica
    function validateField(field) {
      const input = document.getElementById(field.id);
      const isValid = field.validation
        ? field.validation(input.value.trim())
        : input.value.trim() !== "";
      if (!isValid) {
        // SweetAlert2 para mostrar a mensagem de erro
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: field.message,
          confirmButtonColor: "#5172FE",
        });
        input.focus();
        return false;
      }
      return true;
    }

    // Iterar sobre os campos e validar
    for (const field of fields) {
      if (!validateField(field)) {
        return; // Parar a execução se um campo for inválido
      }
    }

    // Se todos os campos forem válidos, construir a URL do WhatsApp e abrir a janela
    var txtName = document.getElementById("txtName").value;
    var txtPhone = document.getElementById("txtPhone").value;
    var txtEmail = document.getElementById("txtEmail").value;
    var urlSend =
      "https://wa.me/5541998572779?text=Nome:+*" +
      encodeURIComponent(txtName) + // Usar encodeURIComponent para evitar problemas com caracteres especiais
      "*%0ATelefone:+*" +
      encodeURIComponent(txtPhone) +
      "*%0AE-mail:+*" +
      encodeURIComponent(txtEmail);

    window.open(urlSend, "_blank");
  });

// Formatação do telefone
function handlePhone(event) {
  let input = event.target;
  input.value = input.value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
}


// Seleciona o botão do menu e o elemento do menu que será mostrado/escondido
const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menu = document.getElementById('navbar-default');

// Adiciona um evento de clique ao botão do menu
menuButton.addEventListener('click', function() {
  // Verifica se o menu está visível e alterna a classe 'hidden'
  menu.classList.toggle('hidden');
  
  // Alterna o atributo 'aria-expanded' entre 'true' e 'false'
  const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
  menuButton.setAttribute('aria-expanded', !expanded);
});