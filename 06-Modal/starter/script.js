'use strict';

//! ======================================
//! UTILIDADES DE SELECCIÓN DE DOM
//! ======================================

//? $ → selecciona el primer elemento que coincide con el selector
const $ = $class => document.querySelector($class);

//? $$ → selecciona todos los elementos que coinciden con el selector
const $$ = $$class => document.querySelectorAll($$class);

//! ======================================
//! ELEMENTOS DEL DOM
//! ======================================

//? referencia al elemento modal (ventana emergente)
const modal = $('.modal');

//? referencia al fondo oscuro detrás del modal
const overlay = $('.overlay');

//? botón para cerrar el modal
const btnCloseModal = $('.close-modal');

//? NodeList con todos los botones que abren el modal
const btnsOpenModal = $$('.show-modal');

//! ======================================
//! FUNCIÓN: CERRAR MODAL
//! ======================================

const closeModal = function () {
  //? agrega 'hidden' para ocultar el modal y el overlay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//! ======================================
//! FUNCIÓN: ABRIR MODAL
//! ======================================

const openModal = function () {
  //? elimina 'hidden' para mostrar el modal y el overlay
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//! ======================================
//! EVENTOS: BOTONES PARA ABRIR MODAL
//! ======================================

//? recorre los 3 botones y añade el evento de apertura
for (let i = 0; i < 3; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//! ======================================
//! EVENTOS: CERRAR MODAL
//! ======================================

//? cerrar con el botón X
btnCloseModal.addEventListener('click', closeModal);

//? cerrar haciendo clic fuera del modal (en el overlay)
overlay.addEventListener('click', closeModal);

//! ======================================
//! EVENTO: CERRAR CON TECLA ESCAPE
//! ======================================

document.addEventListener('keydown', function (e) {
  //? solo cierra si se presiona Escape y el modal está visible
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
