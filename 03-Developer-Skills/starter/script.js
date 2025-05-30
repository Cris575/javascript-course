// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const abc = x => x;

// console.log('hola');
// console.log('hola');
// console.log('hola');
// console.log('hola');
// console.log();

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: parseInt(prompt('Dgrees celsius')),
//   };
//   console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273.15;

//   return kelvin;
// };

// console.log(measureKelvin());

// function printForecast(arr) {
//   let _string = '';
//   for (let i = 0; i < arr.length; i++) {
//     _string += `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   return _string;
// }
// console.log(printForecast([17, 21, 23]));
// console.log(printForecast([12, 5, -2, 0, 4]));

function timeWorked(arr) {
  const initialValue = 0;
  const data = {
    totalHours: arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    ),
    avrg:
      arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      ) / arr.length,
  };

  return data;
}

console.log(timeWorked([1, 2, 3]));
