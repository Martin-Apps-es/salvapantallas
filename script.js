// JavaScript
const $ = (selector) => document.querySelector(selector); // Selector simplificado
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true;

function update() {
  showDot = !showDot; // Alternar el estado del punto
  const now = new Date();

  // Alternar visibilidad del punto
  if (showDot) {
    dot.classList.add('invisible');
  } else {
    dot.classList.remove('invisible');
  }

  // Actualizar la hora y los minutos
  hour.textContent = String(now.getHours()).padStart(2, '0');
  min.textContent = String(now.getMinutes()).padStart(2, '0');

  // Actualizar el día activo en la semana (ajustar para que lunes sea el primer día)
  Array.from(week.children).forEach((ele) => {
    ele.classList.remove('active'); // Remover clase activa de todos los días
  });
  
  // Calcular el índice del día ajustando para que lunes sea el primer día
  const adjustedDay = (now.getDay() === 0) ? 6 : now.getDay() - 1;
  week.children[adjustedDay].classList.add('active'); // Agregar clase activa al día actual
}

// Actualizar el reloj cada 500 ms
setInterval(update, 500);