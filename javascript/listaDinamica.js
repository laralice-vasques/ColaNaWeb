var item;

function setItemLista (objetoItem) {
    item = objetoItem.value;
}

function addItem(){
    var listElement = document.createElement ("li");
    listElement.textContent = item;
    const elementoListaDinamica = getElementoLista();  
    elementoListaDinamica.appendChild (listElement);
}

function getElementoLista() {
    return document.getElementById('lista');
}

