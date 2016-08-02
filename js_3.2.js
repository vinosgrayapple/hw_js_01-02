var body = document.body;

var h4 = document.createElement('h4');
	h4.innerHTML = "Тест по программированию";
	h4.className = "text-center";

var button = document.createElement('button');
	button.innerHTML = "Проверить мои результаты";
	button.className = "btn btn-info center-block";
	button.style.color = 'black';
	button.style.borderColor = 'black';
	button.style.borderRadius = '0';
	button.style.border = '2px solid';
	button.style.backgroundColor = '#cfe2f3';
var ol = document.createElement('ol');
var li = document.createElement('li');


body.appendChild(h4);
body.appendChild(ol);
ol.appendChild(li);
ol.appendChild(li);
ol.appendChild(li);
body.appendChild(button);
