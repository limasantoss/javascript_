for(let pedido = 1 ; pedido <= 3 ; pedido ++){
    switch(pedido){
        case 1 : 
            console.log("Pedido" +pedido+ "Notebook");
            break;
        case 2:
            console.log("Pedido" + pedido + "Mouse");
            break;
        case 3:
            console.log("Pedido " + pedido + "Teclado");
            break;
        default :
            console.log("Pedido invalid");    
    }
    // verificação 
    const pagamentoAprovado = pedido !=2; // true , | false | true
    const  produtoDisponivel = pedido !=3; // true. | true  | false
    const  clienteBloqueado = pedido ==3; // false   | false / true
    
    // verificação final 
    const  pedidoLiberado = pagamentoAprovado && !produtoDisponivel && clienteBloqueado ;
        if(pedidoLiberado){
            console.log("produto disponivel");

        }else if(clienteBloqueado){
            console.log("cliente bloqueado");
        }else if(!produtoDisponivel){
            console.log("Produto não disponivel");
        }else{
            console.log("ERRO NO SISTEMA")
        }

        console.log();
    }

