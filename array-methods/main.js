var arr = [ 3, 6, 8 ];
var str = 'hello';

// console.log(arr.pop()); // Взять из конца и убрать

// console.log(arr.shift()); // Взять из начала и убрать

// console.log(arr.reverse()); // Перевернуть массив

// console.log(arr.join('')); // Преобразовать массив в строку

// console.log(str.split(',')); // Преобразовать строку в массив

var newStr = str.split('').reverse().join('');
console.log(newStr);

arr.forEach(function(item, i, array) {
	console.log(item, i, array);
})

var newArr = arr.map(function(item, i, array) {
	return (item + 46);
})

console.log(newArr);