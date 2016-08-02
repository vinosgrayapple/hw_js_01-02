var body = document.body;
	body.className = "hero-unit";
var h4 = document.createElement('h4');
	h4.innerHTML = "Тест по программированию";
	h4.className = "text-center";
	h4.style.marginBottom = "30px";

var button = document.createElement('button');
	button.innerHTML = "Проверить мои результаты";
	button.className = "btn btn-info center-block";
	button.style.color = 'black';
	button.style.borderColor = 'black';
	button.style.borderRadius = '0';
	button.style.border = '2px solid';
	button.style.backgroundColor = '#cfe2f3';
	button.style.marginTop = "30px"

var ol = document.createElement('ol');
	ol.style.marginLeft = "25%";

for (var i = 1; i <= 3; i++) {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode('Вопрос №'+i));
		ol.appendChild(li);	
}
// var li = document.createElement('li');
// var li2 = li.cloneNode(true);
// var li3 = li.cloneNode(true);
// 	li.innerHTML = "Вопрос №1";
// 	li2.innerHTML = "Вопрос №2";
// 	li3.innerHTML = "Вопрос №3";

var	ul = document.createElement('ul');
	ul.className = "list-unstyled";

li.appendChild(ul);

for (var i = 1; i <= 3; i++) {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode('Вариант ответа №'+i));
		ul.appendChild(li);	
}

// var uli = document.createElement('li');
// var	uli2 = uli.cloneNode(true);
// var	uli3 = uli.cloneNode(true);
// 	uli.innerHTML = "Вариант ответа №1";
// 	uli2.innerHTML = "Вариант ответа №2";
// 	uli3.innerHTML = "Вариант ответа №3";

body.appendChild(h4);
body.appendChild(ol);
// ol.appendChild(li);
// ol.appendChild(li2);
// ol.appendChild(li3);

// ul.appendChild(uli);
// ul.appendChild(uli2);
// ul.appendChild(uli3);




body.appendChild(button);
