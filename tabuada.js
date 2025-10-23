function calcular() {
    //pegar o número vindo do formulário
    var numero = parseFloat(document.getElementById("numero").value);
    var resposta = document.getElementById("resposta");
    var tabuada = "";
    //final determinado.
    for (var i = 0; i <=100; i++) { //i++ incrementa depois da primeira operação, ++i incrementa antes da operação (Não funciona no JavaScript).
         tabuada += numero + "x" + i + "=" + Math.floor(numero * i) + "<br/>";  // "+=" É para uma resposta não sobreescrever outra. 
    }
    resposta.innerHTML = tabuada
}