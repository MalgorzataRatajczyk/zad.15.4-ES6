"use strict"

// zad.1 - połączenie dwóch stringów
const hello = 'Hello'
const world = 'world'

console.log(`${hello} ${world}`);

// zad.2 - stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. 
let x;
let y;
let multiply = (x, y) => { return x * y }
console.log(multiply(2, 5));

// zad.3 - Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami. Korzystaj z rest parameters. Funkcję stwórz za pomocą arrow function.
let average = function(...args) {
  return args.reduce((previous, current) => { 
		return previous + current / args.length;
	});
}
console.log(average(1));

console.log(average(1, 3));

console.log(average(1, 3, 6, 6));

// zad.4 - Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!

let average2 = function(...args) {
	return args.reduce((previous, current) => { 
		return previous + current / args.length;
	});
}
	
const grades = [ 1, 5, 5, 5, 4, 3, 3, 2, 1 ]
console.log(average(...grades))

// zad. 5 - Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

const table = [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstname, , ] = table;
const [ , , , , lastname] = table;
 
console.log(`${firstname} ${lastname}`);






