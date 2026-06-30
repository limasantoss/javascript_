let checkinsLiberados = 0;
let checkinsCancelados = 0;
for(let dias = 1; dias <= 4; dias ++){
    switch(dias){
        case 1: 
            console.log("Hospede" + dias +  "Jõao");
            break;
        case 2:
            console.log("Hospede " + dias + "Maria");
            break;
        case 3:
            console.log("Hospede" + dias + "Carlos");
            break;
        case 4:
            console.log("Hospede" + dias + "Fernanda");
            break;
        default:
            console.log("Hospede não encontrado");

    }
     
    const reservaConfirmada = dias == 1; // false
    const hospedeBloqueado = dias != 2; // true
    const pagamentoPendente = dias == 3;  // true
    const entradaLiberada = !pagamentoPendente && hospedeBloqueado &&  reservaConfirmada;

    if(entradaLiberada){
        console.log("Check-in liberado")
        checkinsLiberados++;
    }else if(!pagamentoPendente){
        console.log("pagamento pendente");
        checkinsCancelados++;
    }else if(hospedeBloqueado){
        console.log("hospede bloqueado");
        checkinsCancelados++;
    }else if(hospedeBloqueado){
        console.log("Reserva não encontrada");
        checkinsCancelados++;
    }
   

}
 console.log("Resumo");
 console.log("Liberados:" + checkinsLiberados);
 console.log("Cancelados" + checkinsCancelados);