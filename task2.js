var arrName = [];
var i = 0;
var checkName = false;

/* Заполняем массив имен! */ 
alert('Вводим 5 имен!! \n');
while ( i < 5 ){
	arrName.push(prompt("Введите имя #"+(++i)));
}
/* Вводим с помощью prompt имя пользователя */ 
var yourName = prompt('Введите Ваше имя:');
/* Введенное имя, циклом сравниваем с именами в массиве */ 
for (var i = 0; i < arrName.length; i++) {
	if (arrName[i] == yourName) checkName = true;
}

checkName ? alert(yourName + ", вы успешно вошли") 
		  : alert("В данном массиве нет Вашего имени!");
