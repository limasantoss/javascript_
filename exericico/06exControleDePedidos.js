 
let pedidosConcluidos = 0;
let pedidosCancelados = 0;
let clientesBloqueados = 0; 
for(let pedidos = 1 ; pedidos <= 3 ; pedidos ++){
    switch(pedidos){
        case 1 :
            console.log("Pedido " +  pedidos + " Pizza");
            break;
        case 2 :
            console.log("Pedido " + pedidos + " Açai ");
            break;
        case 3 :
            console.log("Pedido " + pedidos + " Sorvete");   
            break;     
    }
    const pedidoPronto = pedidos != 2 ; 
    const pedidoCancelado = pedidos != 3 ;
    const clienteBloqueado = pedidos == 3;
    const pedidoconcluido = pedidoPronto && pedidoCancelado && clienteBloqueado ; 

    if(pedidoconcluido){
        console.log("Pedido concluido");
        pedidosConcluidos++;
    }else if(pedidoCancelado){
        console.log("pedido Cancelado ");
        pedidosCancelados++;
    }else if(clienteBloqueado){
        console.log("Cliente bloqueado");
        clientesBloqueados++;
        console.log("Resumo");
        console.log("Pedido cancelado : " +  pedidosCancelados);
        console.log("Clientes bloqueados :" + clientesBloqueados);
    }else{
        console.log("ERRO")
    }

}

