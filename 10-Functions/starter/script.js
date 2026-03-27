'use strict';

// Parámetros por defecto: si no se provee un valor, se usan los definidos aquí
const bookings = [];
const createBooking = function (
  flightNum,
  numPassagers = 1,
  price = 199 * numPassagers,
) {
  // Crear un objeto de reserva con shorthand properties
  const booking = {
    flightNum,
    numPassagers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // usa numPassagers=1 y price=199
createBooking('LH123', 2, 800); // todos los valores son explícitos
createBooking('LH123', 2); // price se calcula como 199 * 2
createBooking('LH123', 5); // price se calcula como 199 * 5

createBooking('LH123', undefined, 1000); // omite numPassagers para usar el valor por defecto
