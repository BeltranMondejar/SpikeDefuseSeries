document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  emailjs.init("sGy4VMC-HMhThBXaZ"); // Reemplaza "YOUR_USER_ID" con tu User ID de EmailJS

  // Obtén los datos del formulario
  const name = document.getElementById('name').value;
  const discord = document.getElementById('discord').value;
  const alias = document.getElementById('alias').value;
  const team = document.getElementById('team').value;
  const rank = document.getElementById('rank').value;
  const manager = document.getElementById('idManager').value;
  const player1 = document.getElementById('idJugador1').value;
  const player2 = document.getElementById('idJugador2').value;
  const player3 = document.getElementById('idJugador3').value;
  const player4 = document.getElementById('idJugador4').value;
  const player5 = document.getElementById('idJugador5').value;
  const coach = document.getElementById('idCoach').value;

  const messageParams = {
    name,
    discord,
    alias,
    team,
    rank,
    manager,
    player1,
    player2,
    player3,
    player4,
    player5,
    coach 
  };

  // Envía el correo electrónico
  emailjs.send("service_mgwy7dz", "template_yn4r289", messageParams)
    .then(function(response) {
      console.log('Éxito:', response.status, response.text);

      // Mostrar toaster de éxito
      const toaster = document.getElementById('toaster');
      toaster.classList.remove('error'); // Eliminar clase de error si existe
      toaster.classList.add('success'); // Agregar clase de éxito
      document.getElementById('toaster-header').textContent = '¡Éxito!'; // Encabezado de éxito
      document.getElementById('toaster-body').textContent = 'Registro enviado con éxito.'; // Cuerpo del mensaje
      toaster.classList.add('show'); // Mostrar el toaster
      toaster.style.display = 'block'; // Mostrar el toaster

      // Ocultar el toaster después de 5 segundos
      setTimeout(() => {
        toaster.classList.remove('show');
        toaster.style.display = 'none'; // Ocultar el toaster
      }, 5000);
    }, function(error) {
      console.log('Error:', error);

      // Mostrar toaster de error
      const toaster = document.getElementById('toaster');
      toaster.classList.remove('success'); // Eliminar clase de éxito si existe
      toaster.classList.add('error'); // Agregar clase de error
      document.getElementById('toaster-header').textContent = '¡Error!'; // Encabezado de error
      document.getElementById('toaster-body').textContent = 'Inténtalo de nuevo'; // Cuerpo del mensaje
      toaster.classList.add('show'); // Mostrar el toaster
      toaster.style.display = 'block'; // Mostrar el toaster

      // Ocultar el toaster después de 5 segundos
      setTimeout(() => {
        toaster.classList.remove('show');
        toaster.style.display = 'none'; // Ocultar el toaster
      }, 5000);
    });
});

// Función para habilitar/deshabilitar el botón de envío
const form = document.getElementById('registration-form');
const submitButton = document.getElementById('submit-btn');

function toggleSubmitButton() {
  const isValid = form.checkValidity();
  submitButton.disabled = !isValid;
  submitButton.classList.toggle('disabled', !isValid);
}

// Escuchar cambios en el formulario
form.addEventListener('input', toggleSubmitButton);
form.addEventListener('change', toggleSubmitButton);

// Deshabilitar el botón al cargar
toggleSubmitButton();