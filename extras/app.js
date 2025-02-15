// JavaScript para hacer la navegación suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Funcion comprobar Switch
  document.addEventListener("DOMContentLoaded", function () {
    const switchToggle = document.getElementById("toggle-switch");
  
    switchToggle.addEventListener("change", function () {
      if (switchToggle.checked) {
        console.log("Activado");
      } else {
        console.log("Desactivado");
      }
    });
  });
  
  // Simulación de un calendario básico en la sección de agenda (Schedule)
  const calendarContainer = document.getElementById('calendar');
  
  const calendarData = [
    { date: '25/10/2024', match: 'Equipo Alpha vs Equipo Beta' },
    { date: '26/10/2024', match: 'Equipo Gamma vs Equipo Delta' },
    { date: '27/10/2024', match: 'Semifinal 1' },
    { date: '28/10/2024', match: 'Semifinal 2' },
    { date: '29/10/2024', match: 'Final' }
  ];
  
  calendarData.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.style.padding = '10px';
    eventElement.style.borderBottom = '1px solid #333';
    
    eventElement.innerHTML = `<strong>${event.date}</strong>: ${event.match}`;
    calendarContainer.appendChild(eventElement);
  });
  
  // Efecto de hover en los botones de registro
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
    });
  
    button.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Puedes agregar más scripts para la integración de la API de Twitch o YouTube si es necesario.
  