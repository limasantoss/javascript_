for(let entrega = 1 ; entrega <= 3; entrega++){
    switch(entrega){
        case 1:
            console.log("Entrega " + entrega + "Pizza");
            break
        case 2 :
            console.log("Entrega " + entrega + "Remédio");
            break;
        case 3 : 
            console.log("Entrega " + entrega + "Documento");
            break;
    }
    const entregaLiberada = entrega != 2;  // true , true , false
    const enderecoInvalido = entrega != 3;
    const entregaCancelada = entrega ==3;

    const entregaConcluida = entregaLiberada && enderecoInvalido && !entregaCancelada;
    if(entregaConcluida){
        console.log("Entrega concluida");
    }else if(enderecoInvalido){
        console.log("Endereço invalido");
    }else if(entregaCancelada){
        console.log("entrega cancelada");
    }else{
        console.log("ERRO");
    }

}