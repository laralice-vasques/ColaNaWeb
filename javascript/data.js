
function main(){
    FullDateTime = getFullDateTime();
    escreveNoHTML(FullDateTime);
    //a cada meio segundo, a função escreveNoHTML executa
    setTimeout(main,500);
}

function getFullDateTime() {
    return `${getCurrentDate()} - ${getCurrentTime()}`;
}

function escreveNoHTML(FullDateTime){
    elemento = getElemento();
    elemento.innerHTML= FullDateTime;
}

function getElemento() {
    return document.getElementById('data');
}

function getCurrentDate(){

    //Monta a Data
	mydate = new Date();

	day = mydate.getDate();
    day = addDigitZero(day);

	month = mydate.getMonth() + 1;
    month = addDigitZero(month);
    
	year = mydate.getFullYear();

	return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    var today=new Date();
    var horas=today.getHours();
    var minutos=today.getMinutes();
    var segundos=today.getSeconds();

    // adicione um zero na frente de números<10
    minutos=addDigitZero(minutos);
    segundos=addDigitZero(segundos);

    return `${horas} : ${minutos} : ${segundos}`;
}

function addDigitZero(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}





