var numbers = [ 3, 5, 6, 9, 2, 5, 87, 7 ]

var max = numbers[0]

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
}
alert(max)
