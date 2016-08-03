var body = document.body;
	body.className = "hero-unit";
var h4 = document.createElement('h4');
	h4.innerHTML = "Тест по программированию";
	h4.className = "text-center";
	h4.style.marginBottom = "30px";
	body.appendChild(h4);





var ol = document.createElement('ol');
	ol.style.marginLeft = "25%";
	
	body.appendChild(ol);


for (var i = 1; i <= 3; i++) {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode('Вопрос №'+i));
		ol.appendChild(li);	

	var	ul = document.createElement('ul');
	ul.className = "list-unstyled";
	li.appendChild(ul);

	for (var j = 1; j <= 3; j++) {
	var li = document.createElement('li');
		li.appendChild(document.createTextNode('Вариант ответа №'+j));
		ul.appendChild(li);	
	}

}



var button = document.createElement('button');
	button.innerHTML = "Проверить мои результаты";
	button.className = "btn btn-info center-block";
	button.style.color = 'black';
	button.style.borderColor = 'black';
	button.style.borderRadius = '0';
	button.style.border = '2px solid';
	button.style.backgroundColor = '#cfe2f3';
	button.style.marginTop = "30px"

body.appendChild(button);
