"use strict";

// zad.1 - połączenie dwóch stringów

var hello = 'Hello';
var world = 'world';

console.log(hello + ' ' + world);

// zad.2 - stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. 
var x = void 0;
var y = void 0;
var multiply = function multiply(x, y) {
	return x * y;
};
console.log(multiply(2, 5));

// zad.3 - Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami. Korzystaj z rest parameters. Funkcję stwórz za pomocą arrow function.
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.reduce(function (previous, current) {
		return previous + current / args.length;
	});
};
console.log(average(1));

console.log(average(1, 3));

console.log(average(1, 3, 6, 6));

// zad.4 - Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!

var average2 = function average2() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	return args.reduce(function (previous, current) {
		return previous + current / args.length;
	});
};

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// zad. 5 - Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.

var table = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = table[2];
var lastname = table[4];


console.log(firstname + ' ' + lastname);
