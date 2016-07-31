function pow(n,x){
	if (!x) return 1;
	if (!n) return 0;
	exp=Math.abs(x);	
	temp = 1;
	for (var i=0; i < exp; i++) {
		temp *= n;
	}
	return x < 0 ? 1/temp : temp;
}

var	base = +prompt('Введите целое число которое необходимо возвести в степень: '),
	exponent = +prompt('Введите степень числа: ');

console.log('Answer(pow):     ',pow(base,exponent));
console.log('Answer(Math.pow):',Math.pow(base,exponent));


