function calculeValor() {
    var sabor = document.getElementById("inSabor").value;
    var valor = Number(document.getElementById('inValor').value);
    var bairro = document.getElementById('escolha').value;
    var taxaEntrega = 0;

    if(!sabor){
        alert('Não tem Sabor!!')
        document.getElementById('inSabor').focus()
        return
    }
    if(!valor){
        alert('Não tem o valor!!')
        document.getElementById('inValor').focus()
        return
    }

    switch(bairro){
        case "pinherinho":
            taxaEntrega = 10.90;
            break;
        case "prospera":
            taxaEntrega = 8;
            break;
        case "centro":
            taxaEntrega = 5;
            break;
    }

    var total = valor + taxaEntrega;

    document.getElementById("resultado").innerText = 
        `O valor da pizza sabor ${sabor} com entrega no bairro ${bairro} é R$ ${total.toFixed(2)}.`;
}